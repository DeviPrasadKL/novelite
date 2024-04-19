import { Box, Grid, Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../../../store/apps/tickets/TicketSlice';
import { useFrappeGetDocCount } from 'frappe-react-sdk';

const BoxStyled = styled(Box)(() => ({
    padding: '30px',
    transition: '0.1s ease-in',
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
        transform: 'scale(1.03)',
    },
}));


const NovelTicketFilter = ({ userEmail, filterLocation }) => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.ticketReducer.tickets);

    const pendingC = counter ? counter.filter((t) => t.status === 'On Hold').length : "0";
    const openC = counter ? counter.filter((t) => t.status === 'Open').length : "0";
    const closeC = counter ? counter.filter((t) => t.status === 'Closed').length : "0";

    // const filterByLocation = ()=>{}

    const totalIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            filterLocation === "ALL" ? [['raised_by', '=', userEmail]] : [['raised_by', '=', userEmail], ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data
        }
        return 0;
    }
    const closedIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            filterLocation === "ALL" ? [['status', '=', 'Closed'], ['raised_by', '=', userEmail]] : [['status', '=', 'closed'],['raised_by', '=', userEmail], ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data;
        }
        return 0;
    }
    const pendingIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            filterLocation === "ALL" ? [['status', '=', 'Pending'], ['raised_by', '=', userEmail]] : [['status', '=', 'on hold'],['raised_by', '=', userEmail], ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data;
        }
        return 0;
    }

    const openIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            filterLocation === "ALL" ? [['status', '=', 'In-Progress'], ['raised_by', '=', userEmail]] : [['status', '=', 'open'],['raised_by', '=', userEmail], ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data;
        }
        return 0;
    }

    return (
        <Grid container spacing={3} textAlign="center" p={1}>
            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={openIssues() !== 0 ? () => dispatch(setVisibilityFilter('In-Progress')) : undefined}
                    sx={{ backgroundColor: 'success.light', color: 'success.main', cursor: openIssues() !== 0 ? 'pointer' : 'default'  }}
                >
                    <Typography variant="h3">{openIssues()}</Typography>
                    <Typography variant="h6">In-Progress</Typography>
                </BoxStyled>
            </Grid>
            
            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={ pendingIssues() !== 0 ? () => dispatch(setVisibilityFilter('Pending')) : undefined }
                    sx={{ backgroundColor: 'warning.light', color: 'warning.main', cursor: pendingIssues() !== 0 ? 'pointer' : 'default'  }}
                >
                    <Typography variant="h3">{pendingIssues()}</Typography>
                    <Typography variant="h6">Pending</Typography>
                </BoxStyled>
            </Grid>

            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={closedIssues() !== 0 ? () => dispatch(setVisibilityFilter('Closed')) : undefined}
                    sx={{ backgroundColor: 'error.light', color: 'error.main', cursor: closedIssues()  !== 0 ? 'pointer' : 'default'  }}
                >
                    <Typography variant="h3">{closedIssues()}</Typography>
                    <Typography variant="h6">Closed</Typography>
                </BoxStyled>
            </Grid>
            
            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={totalIssues() !== 0 ? () => dispatch(setVisibilityFilter('total_tickets')) : undefined}
                    sx={{ backgroundColor: 'primary.light', color: 'primary.main', cursor: totalIssues() !== 0 ? 'pointer' : 'default'  }}
                >
                    <Typography variant="h3">{totalIssues()}</Typography>
                    <Typography variant="h6">Total</Typography>
                </BoxStyled>
            </Grid>
        </Grid>
    );
};

export default NovelTicketFilter;
