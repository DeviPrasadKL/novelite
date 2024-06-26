import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, InputBase, Box, Button, Typography } from '@mui/material';
// import Picker from 'emoji-picker-react';
import { IconPaperclip, IconPhoto, IconSend } from '@tabler/icons';
import { sendMsg } from 'src/store/apps/chat/ChatSlice';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

//Attachment
import { styled } from '@mui/material/styles';

//Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Attachment Style
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function TicketChatSender({ id, fetchChats, issueMessages }) {

    const dispatch = useDispatch();
    const [msg, setMsg] = React.useState('');
    const [attachment, setAttachment] = React.useState(null);
    const [attachmentName, setAttachmentName] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [chosenEmoji, setChosenEmoji] = React.useState();

    const userEmail = useSelector((state) => state.novelprofileReducer.userEmail);
    const fullName = useSelector((state) => state.novelprofileReducer.fullName);

    // console.log("issueMessages = ", issueMessages.all_messages[0].parent);

    const parentId = issueMessages.length !== 0 ? issueMessages.all_messages[0]?.parent : null;
    //Toast
    const notifySuccess = (msg) => toast.success(msg, { toastId: "success" });
    const notifyError = (msg) => toast.error(msg, { toastId: "error" });
    const notifyWarn = (msg) => toast.warn(msg, { toastId: "warn" });

    const onEmojiClick = (_event, emojiObject) => {
        setChosenEmoji(emojiObject);
        setAttachmentName(emojiObject.emoji);
    };

    const handleChatMsgChange = (e) => {
        setMsg(e.target.value);
    };


    // console.log("Id is ", id);
    const formattedDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    // console.log("Date is  ", formattedDate);


    //--------------------------------------------------------File Attachments-----------------------------------------//
    const sendAttachment = (e) => {
        setAttachment(e.target.files[0])
        console.log(e.target.files[0]);
        setAttachmentName(e.target.files[0].name);
        // setMsg(e.target.files[0].name);
    }

    const clearAttachment = () => {
        // setMsg('');
        setAttachment(null);
        setAttachmentName("");
    }

    const checkFileFormat = (file) => {
        if (!file) {
            return false;
        } else if (file.size > 5242880) {
            return true;
        }
        const extension = file.name.split('.').pop().toLowerCase();
        const allowedFormats = ['pdf', 'png', 'jpg', 'jpeg', 'heif', 'hevc', 'heic', 'mov', 'docx', 'doc', 'mov', 'mp4', 'webm'];
        if (!allowedFormats.includes(extension)) {
            return true;
        }
        return false;
    }

    //--------------------------------------------------------Send Chat-----------------------------------------//
    const onChatMsgSubmit = (e) => {

        if (msg.trim() !== "") {
            const messageData = {
                message: msg,
                issue_id: id,
                comment_by_email: userEmail,
                parentId: parentId
            }

            if (attachment) {
                if (checkFileFormat(attachment)) {
                    notifyWarn("File size cannot be more than 5MB");
                    setAttachmentName("");
                } else {
                    const reader = new FileReader();
                    reader.readAsDataURL(attachment);
                    reader.onloadend = function () {
                        const base64data = reader.result;

                        // Include base64 data in messageData
                        messageData.file = base64data;
                        sendChat(messageData);
                        setAttachment(null);
                        setAttachmentName("");
                    }
                }
            } else {
                sendChat(messageData);
                setAttachment(null);
                setAttachmentName("");
            }
        } else {
            notifyWarn("Please type a valid message");
        }
        setMsg('');
    };

    const sendChat = (data) => {
        axios.post('/api/method/novelite.api.issue_comment_for_client.addDataToIssueCommentForClient', data)
            .then((res) => {
                notifySuccess(res.data.message)
                setAttachmentName("");
                fetchChats();
            })
            .catch((err) => {
                notifyError(err)
                console.log(err);
            })
    }

    return (
        <Box p={2}>
            {/* ------------------------------------------- */}
            {/* sent chat */}
            {/* ------------------------------------------- */}
            <form
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
            >
                <InputBase
                    id="msg-sent"
                    fullWidth
                    value={msg}
                    placeholder="Type a Message"
                    size="small"
                    type="text"
                    inputProps={{ 'aria-label': 'Type a Message' }}
                    onChange={handleChatMsgChange}
                />
                <IconButton
                    aria-label="send"
                    onClick={onChatMsgSubmit}
                    disabled={!msg || msg.length > 500}
                    type='submit'
                    color="primary"
                >
                    <IconSend stroke={1.5} size="20" />
                </IconButton>

                {attachment ?
                    <IconButton onClick={clearAttachment} color="primary">
                        <CloseIcon />
                    </IconButton>
                    :
                    <IconButton >
                        {/* <IconPaperclip stroke={1.5} size="20" /> */}

                        <Button
                            component="label"
                            role={undefined}
                            variant="outlined"
                            disabled={msg.length > 500}
                            sx={{ backgroundColor: 'none', color: "none" }}
                        >
                            <IconPaperclip />
                            <VisuallyHiddenInput type="file" accept=".png,.jpg,.jpeg,.pdf,.heif,.hevc,.heic,.mov,.doc,.docx,.mp4,.webm,.mkv" onChange={(e) => sendAttachment(e)} />
                        </Button>
                    </IconButton>}
            </form>
            {attachmentName && <Box>
                <Typography variant='caption'>{attachmentName}</Typography>
            </Box>}
            {msg.length > 500 && <Box>
                <Typography variant='caption' color={msg.length > 500 ? '#fd4f4f' : ""} >{msg.length} letters</Typography> <br />
                <Typography variant='caption' color='#fd4f4f' > Letters / characters cannot exceed 500. </Typography>
            </Box>}
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Box>
    );
}
