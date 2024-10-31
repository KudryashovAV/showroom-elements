"use client"
import { Container } from '@mui/material';
import Content from './sections/Content';
import Sidebar from './sections/Sidebar';

const HomePage = () => {
  return (
    <Container>
        <div>
         <Paper />
        <SearchInput />
        {/* <JobsListPage /> */}
        <SwipeableTemporaryDrawer />
        </div>
    </Container>
  )
}

export default HomePage;