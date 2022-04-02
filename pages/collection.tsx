import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../styles/Collection.module.scss'
import Sidebar from '../components/Sidebar'
import AuctionItem from '../components/AuctionItem'
import Dropdown from '../components/Dropdown'
import Header from '../components/Header'
import { handleSidebarOpen, handleSidebarClose } from "store/actions/init"

import { makeStyles, withStyles } from '@mui/styles';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { connect } from "react-redux"
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AppBar, Tabs, Tab, Typography, Box, Slider, Button } from '@mui/material'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import dynamic from "next/dynamic";
import MuiDrawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ActivityList from '../components/CustomTable'

const ActivityChart = dynamic(() => import("../components/Chart"), {
  ssr: false
});

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  '&::-webkit-scrollbar': {
    width: '10px'
  },
  '&::-webkit-scrollbar-track': {
    margin: '5px',
    background: '#071421',
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-thumb ': {
    background: '#0B354D',
    borderRadius: '50px',
    cursor: 'pointer'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#0B354D'
  },
  padding: "30px",
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  padding: "30px 9px 0 16px",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    // width: `calc(${theme.spacing(8)} + 1px)`,
    width: "50px",
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    height: "calc(60vh)",
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),

    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Accordion = withStyles({
  root: {

    backgroundColor: "transparent",
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      // margin: 'auto',
    },
  },
  expanded: {

  },
  rounded: {
    marginBottom: '20px'
  }
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: '42px',
    borderRadius: "8px",
    fontSize: "14px",
    '&$expanded': {
      minHeight: 42,
    },

    '& .MuiAccordionSummary-expandIcon': {
      color: '#8fb0ce',
      '&$expanded': {
        transform: 'rotate(45deg)'
      },
    },
    '& .MuiAccordionSummary-content': {
      margin: '7px 0'
    }
  },
  content: {
    '&$expanded': {
      margin: '7px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails)


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

let nfts: any[] = [
  { image: '/assets/images/11.png', nftName: 'Decimus #147', userName: 'Decimus Dynamics', count: 30 },
  { image: '/assets/images/12.png', nftName: 'Decimus #775', userName: 'Decimus Dynamics', count: 18 },
  { image: '/assets/images/13.png', nftName: 'Decimus #2494', userName: 'Decimus Dynamics', count: 27 },
  { image: '/assets/images/14.png', nftName: 'Decimus #1634', userName: 'Decimus Dynamics', count: 30 },
  { image: '/assets/images/15.png', nftName: 'Decimus #749', userName: 'Decimus Dynamics', count: 18 },
  { image: '/assets/images/16.png', nftName: 'Decimus #1177', userName: 'Decimus Dynamics', count: 27 },
  { image: '/assets/images/17.png', nftName: 'Decimus #1575', userName: 'Decimus Dynamics', count: 27 },
  { image: '/assets/images/18.png', nftName: 'Decimus #1641', userName: 'Decimus Dynamics', count: 27 },
  { image: '/assets/images/19.png', nftName: 'Decimus #1909', userName: 'Decimus Dynamics', count: 27 },
  { image: '/assets/images/20.png', nftName: 'Decimus #922', userName: 'Decimus Dynamics', count: 27 },
  { image: '/assets/images/21.png', nftName: 'Decimus #744', userName: 'Decimus Dynamics', count: 27 },
  { image: '/assets/images/22.png', nftName: 'Decimus #643', userName: 'Decimus Dynamics', count: 27 },
]

let accordionList: any[] = [
  {
    Background: [
      { key: 'Green', count: 47, value: 2.65 },
      { key: 'Purple', count: 47, value: 2.65 },
      { key: 'Red', count: 43, value: 2.65 },
      { key: 'Cream', count: 41, value: 2.65 },
      { key: 'Yellow', count: 38, value: 2.65 },
      { key: 'Cave', count: 21, value: 2.65 },
    ]
  },
  {
    Eyes: [
      { key: 'Green', count: 47, value: 2.65 },
      { key: 'Purple', count: 47, value: 2.65 },
      { key: 'Red', count: 43, value: 2.65 },
      { key: 'Cream', count: 41, value: 2.65 },
      { key: 'Yellow', count: 38, value: 2.65 },
      { key: 'Cave', count: 21, value: 2.65 },
    ]
  },
  {
    Face: [
      { key: 'Green', count: 47, value: 2.65 },
      { key: 'Purple', count: 47, value: 2.65 },
      { key: 'Red', count: 43, value: 2.65 },
      { key: 'Cream', count: 41, value: 2.65 },
      { key: 'Yellow', count: 38, value: 2.65 },
      { key: 'Cave', count: 21, value: 2.65 },
    ]
  },
  {
    Head: [
      { key: 'Green', count: 47, value: 2.65 },
      { key: 'Purple', count: 47, value: 2.65 },
      { key: 'Red', count: 43, value: 2.65 },
      { key: 'Cream', count: 41, value: 2.65 },
      { key: 'Yellow', count: 38, value: 2.65 },
      { key: 'Cave', count: 21, value: 2.65 },
    ]
  },
  {
    Mouth: [
      { key: 'Green', count: 47, value: 2.65 },
      { key: 'Purple', count: 47, value: 2.65 },
      { key: 'Red', count: 43, value: 2.65 },
      { key: 'Cream', count: 41, value: 2.65 },
      { key: 'Yellow', count: 38, value: 2.65 },
      { key: 'Cave', count: 21, value: 2.65 },
    ]
  },
  {
    Necklace: [
      { key: 'Green', count: 47, value: 2.65 },
      { key: 'Purple', count: 47, value: 2.65 },
      { key: 'Red', count: 43, value: 2.65 },
      { key: 'Cream', count: 41, value: 2.65 },
      { key: 'Yellow', count: 38, value: 2.65 },
      { key: 'Cave', count: 21, value: 2.65 },
    ]
  },
  {
    Shirt: [
      { key: 'Green', count: 47, value: 2.65 },
      { key: 'Purple', count: 47, value: 2.65 },
      { key: 'Red', count: 43, value: 2.65 },
      { key: 'Cream', count: 41, value: 2.65 },
      { key: 'Yellow', count: 38, value: 2.65 },
      { key: 'Cave', count: 21, value: 2.65 },
    ]
  }
]

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabItemsLabel = () => {
  return <Box sx={{ display: "flex" }}>
    <FormatListBulletedIcon sx={{ color: '#00D2FF' }} />
    <Typography sx={{ ml: 1 }}>Items</Typography>
  </Box>
}

const TabActivityLabel = () => {
  return <Box sx={{ display: "flex" }}>
    <AccessTimeIcon sx={{ color: '#00D2FF' }} />
    <Typography sx={{ ml: 1 }}>Activity</Typography>
  </Box>
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#889ab1",
    '& .MuiAppBar-root': {
      boxShadow: 'none',
      borderBottom: '1px solid #0C4258'
    },
    '& .MuiTab-root': {
      margin: '0 5px',
      minWidth: '120px',
      color: "#fff"
    },
    '& .Mui-selected': {

    },
    '& .MuiTabs-indicator': {
      height: '3px'
    },
    '& .MuiTabs-indicator:after': {
      position: "absolute",
      bottom: "-20px",
      content: "dsfsdf",
      display: "block",
      width: "100px",
      height: "100px",
      background: "red"
    }
  },
  indicator: {
    backgroundColor: '#00D2FF'
  }
}));


const Collection = ({ sidebarOpen }) => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [schVisible, setSchVisible] = useState(false)

  const [selectedPropertyList, setSelectedProperyList] = useState<string>([]);

  const handleChangeAccordion = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    console.log(event)
    setExpanded(newExpanded ? panel : false);
  };


  const [value, setValue] = React.useState(0);
  const [isActivity, setActivity] = React.useState(false)

  const [alignment, setAlignment] = React.useState('web');

  const handleToggleButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(event)
    setValue(newValue);
  };

  const addSelectedPropertyList = (text: String) => {
    let propList = selectedPropertyList
    propList.push(text)
    setSelectedProperyList([...propList])
  }

  const removeSelectedPropertyList = (text: String) => {
    let propList = selectedPropertyList
    propList.pop(text)
    setSelectedProperyList([...propList])
  }

  let width = sidebarOpen === true ? 199 : 90

  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeKey={1} />
      <div className={styles.profile_section} style={{ width: `calc(100% - ${width}px)` }}>
        <Header sidebarOpen={sidebarOpen} />
        <div className={styles.profile_header}>
          <div className={styles.profile_info}>
            <div className={styles.profile_image}>
              <img src="/assets/images/profile.png" alt="profile" />
            </div>
            <div className={styles.profile_description}>
              <h2 className={styles.profile_name}>Decimus Dynamics</h2>
              <p>It is the year 3081. The Earth is now a desolate landscape uninhabitable for the human race. A group of aliens, the Zeons invaded the Earth and decimated... read more</p>
              <ul className={styles.profile_link_wrapper}>
                <li>
                  <Button sx={{ border: "1px solid #7FF9E6", color: "#7FF9E6" }}>
                    <CheckCircleOutlineIcon />
                  verified
                </Button>
                </li>
                <li>
                  <Button sx={{ border: "1px solid #00D2FF", color: "#00D2FF" }}>
                    <CheckCircleOutlineIcon />
                  featured
                </Button>
                </li>
                <li>
                  <a href="#"><img src="/assets/images/twitter_icon.png" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="/assets/images/discord_icon.png" alt="" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.chart_list_wrap}>
            <ul className={styles.chart_list}>
              <li className={styles.chart_item}>
                <div className={styles.chart_info}>
                  <dl>
                    <dt>FLOOR PRICE(24H)</dt>
                    <dd>
                      <span>9.5 ◎</span>
                      <span className={styles.stick1}>+30%</span>
                    </dd>
                  </dl>
                </div>
                <div className={styles.chart_area}>
                  <img className="img_responsive" src="/assets/images/chart1.png" alt="" />
                </div>
              </li>
              <li className={styles.chart_item}>
                <div className={styles.chart_info}>
                  <dl>
                    <dt>AVG. SALE PRICE (24H)</dt>
                    <dd>
                      <span>14.5 ◎</span>
                      <span className={styles.stick1}>+3%</span>
                    </dd>
                  </dl>
                </div>
                <div className={styles.chart_area}>
                  <img className="img_responsive" src="/assets/images/chart2.png" alt="" />
                </div>
              </li>
              <li className={styles.chart_item}>
                <div className={styles.chart_info}>
                  <dl>
                    <dt>TOTAL VALUE</dt>
                    <dd>
                      <span>33, 412 ◎</span>
                    </dd>
                  </dl>
                </div>
                <div className={styles.chart_area}>
                  <img className="img_responsive" src="/assets/images/chart3.png" alt="" />
                </div>
              </li>
              <li className={styles.chart_item}>
                <div className={styles.chart_info}>
                  <dl>
                    <dt>LISTED COUNT</dt>
                    <dd>
                      <span>44 ◎</span>
                      <span className={styles.stick2}>(1%)</span>
                    </dd>
                  </dl>
                </div>
                <div className={styles.chart_area}>
                  <img className="img_responsive" src="/assets/images/chart4.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.profile_body}>
          <div className={classes.root}>
            <AppBar position="static" color="transparent">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered
                classes={{ indicator: classes.indicator }}
              >
                <Tab label={<TabItemsLabel />} {...a11yProps(0)} sx={{ textTransform: "none" }} onClick={() => setActivity(false)} />
                <Tab label={<TabActivityLabel />} {...a11yProps(1)} sx={{ textTransform: "none" }} onClick={() => { setActivity(true); setExpanded(false) }} />
              </Tabs>
            </AppBar>
            <div className={styles.items_wrapper}>
              <div className={styles.items_navigation_bar}>
                <Drawer variant="permanent" open={open}
                  sx={{
                    '& .MuiDrawer-paper': {
                      position: 'absolute',
                      zIndex: 1,

                      background: '#13202D',
                      border: "none",
                      borderRight: "1px solid #0C4258"
                    }
                  }}>
                  {
                    open ? <React.Fragment>
                      <div className={styles.items_filter_bar}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography sx={{ fontSize: "16px", color: !isActivity ? "#fff" : "#192633" }}>Filters</Typography>
                          <DoubleArrowIcon sx={{ fontSize: "20px", color: "#00D2FF", cursor: "pointer", transform: 'rotate(180deg)', '&.Mui-selected:hover, &.Mui-selected': { fontSize: "24px" } }} onClick={handleDrawerClose} />
                        </Box>
                        <Box style={{ margin: "13px 0" }}>
                          <Typography sx={{ fontSize: "14px" }} color={!isActivity ? "#ccc" : "#192633"}>Price Range: 2.7 ~ 50 ◎</Typography>
                        </Box>
                        <Box sx={{ display: "flex", margin: '10px 0 30px 0' }}>
                          <Slider defaultValue={20} min={1} max={50} aria-label="Default" valueLabelDisplay="auto"
                            sx={{
                              pointerEvents: isActivity ? "none !important" : "",
                              '& 	.MuiSlider-rail': {
                                background: !isActivity ? "#071421" : "#071421",
                                height: "15px",
                                opacity: 1
                              },
                              '& .MuiSlider-track': {
                                background: !isActivity ? "#0B354D" : "#192633",
                                height: "15px",
                                border: "none",
                                opacity: 1
                              },
                              '& .MuiSlider-thumb': {
                                background: !isActivity ? "#00D2FF" : "#324353"
                              }
                            }}
                          />
                          <Button sx={{ marginLeft: "20px", padding: "3px 3px 2px 3px", border: !isActivity ? "1px solid #fff" : "1px solid #192633", color: !isActivity ? "#fff" : "#192633", fontSize: "14px" }}>APPLY</Button>
                        </Box>
                      </div>
                      {
                        accordionList.map((item, index) => (
                          <Fragment>
                            <Accordion onChange={handleChangeAccordion(`panel${(index + 1)}`)} expanded={expanded === `panel${(index + 1)}`}>
                              <AccordionSummary aria-controls={`panel${(index + 1)}-content`} id={`panel${(index + 1)}-header`} expandIcon={<KeyboardArrowDownIcon style={{ color: !isActivity ? "#fff" : "#324353", fontSize: 18 }} />}
                                sx={{
                                  backgroundColor: !isActivity ? '#0B354D' : '#192633',
                                  pointerEvents: isActivity ? "none !important" : "",
                                  color: !isActivity ? "#ccc" : "#324353",
                                }}
                              >
                                <Typography sx={{ fontSize: "14px" }}>{Object.keys(item)[0]}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <div className={styles.properties_list_wrap}>
                                  <ul className={styles.properties_list}>
                                    {
                                      Object.values<any>(item)[0].map((value, key) => (
                                        !selectedPropertyList.includes(value.key) && <li key={key} className={styles.properties_item} onClick={() => addSelectedPropertyList(value.key)}>
                                          <span className={styles.prpt_value}>{value.key}({value.count})</span>
                                          <span>Floor: {value.value}</span>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                              </AccordionDetails>
                            </Accordion>
                          </Fragment>
                        ))
                      }
                    </React.Fragment> : <React.Fragment>
                        <DoubleArrowIcon sx={{ fontSize: "20px", color: "#00D2FF", cursor: "pointer", '&.Mui-selected:hover, &.Mui-selected': { fontSize: "24px" } }} onClick={handleDrawerOpen} />
                      </React.Fragment>
                  }
                </Drawer>
              </div>
              <TabPanel value={value} index={0} style={{ width: `calc(100% - ${open ? 300 : 50}px)` }}>
                <div className={styles.items_content_wrapper}>
                  <div className={styles.items_top_bar}>
                    <div className={styles.selection_bar}>
                      <ul>
                        {
                          selectedPropertyList.map((item, index) => (
                            <li key={index} onClick={() => removeSelectedPropertyList(item)}>{item} <span>X</span></li>
                          ))
                        }
                      </ul>
                    </div>
                    <Box sx={{ display: "flex" }}>
                      <div className={styles.items_search_form}>
                        <input type="text" placeholder="Search..." style={{ display: schVisible ? 'block' : 'none' }} />
                        <SearchIcon
                          onClick={() => setSchVisible(true)}
                          sx={{
                            position: "absolute",
                            top: '8px',
                            right: '11px',
                            zIndex: 1,
                            fontSize: "25px",
                            color: '#fff',
                            cursor: "pointer"
                          }} />
                      </div>
                      <div className={styles.dropdown_wrapper}>
                        <Dropdown />
                      </div>
                    </Box>
                  </div>
                  <div className={styles.items_list_wrapper}>
                    <div className={styles.items_list}>
                      {
                        nfts.map((item: any, index: number) => (
                          <div key={index} className={styles.each_item}>
                            <AuctionItem imgUrl={item.image} nftName={item.nftName} userName={item.userName} count={item.count} />
                          </div>
                        ))
                      }
                    </div>
                  </div>

                </div>
              </TabPanel>
              <TabPanel value={value} index={1} style={{ width: `calc(100% - ${open ? 300 : 50}px)`, textAlign: "left" }} >
                <div className={styles.activity_content_wrapper} id="chart_wrapper">
                  <Box sx={{ padding: "20px 19px", background: "#0E1B29", borderRadius: "5px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                      <Typography color="#fff" sx={{ fontSize: "16px" }}>Floor Price and Volume(SOL)</Typography>
                      <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleToggleButtonChange}
                        sx={{
                          backgroundColor: "#071421"
                        }}
                      >
                        <ToggleButton value="web" sx={{ padding: "5px 8px", fontSize: "12px", color: "#aaa", textTransform: "none", '&.Mui-selected:hover, &.Mui-selected': { backgroundColor: "#1B6A97", color: '#fff' } }}>7 days</ToggleButton>
                        <ToggleButton value="android" sx={{ padding: "5px 8px", fontSize: "12px", color: "#aaa", textTransform: "none", '&.Mui-selected:hover, &.Mui-selected': { backgroundColor: "#1B6A97", color: '#fff' } }} >30days</ToggleButton>
                        <ToggleButton value="ios" sx={{ padding: "5px 8px", fontSize: "12px", color: "#aaa", textTransform: "none", '&.Mui-selected:hover, &.Mui-selected': { backgroundColor: "#1B6A97", color: '#fff' } }}>90days</ToggleButton>
                        <ToggleButton value="ios1" sx={{ padding: "5px 8px", fontSize: "12px", color: "#aaa", textTransform: "none", '&.Mui-selected:hover, &.Mui-selected': { backgroundColor: "#1B6A97", color: '#fff' } }}>1 year</ToggleButton>
                        <ToggleButton value="ios2" sx={{ padding: "5px 8px", fontSize: "12px", color: "#aaa", textTransform: "none", '&.Mui-selected:hover, &.Mui-selected': { backgroundColor: "#1B6A97", color: '#fff' } }}>All time</ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                    <ActivityChart />
                  </Box>
                  <Box sx={{ margin: "40px 0" }}>
                    <ActivityList />
                  </Box>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

Collection.getInitialProps = async ({ store }) => {

};

const mapStateToProps = state => {

  return {
    people: state.people?.people || [],
    selectedPerson: state.people.selectedPerson,
    sidebarOpen: state.init.sidebarOpen
  };
};

const mapDispatchToProps = { handleSidebarOpen, handleSidebarClose };

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
