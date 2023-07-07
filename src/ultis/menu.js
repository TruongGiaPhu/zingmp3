import icons from './icons';

const { MdOutlineLibraryMusic, TbChartArcs, HiOutlineChartPie, MdOutlineFeed } =
    icons;

export const Sidebar = [
    {
        path: 'canhan',
        text: 'Cá nhân',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: '',
        text: 'Khám Phá',
        end: true,
        icon: <TbChartArcs size={24} />,
    },
    {
        path: 'zingchart',
        text: '#Zingchart',
        icon: <HiOutlineChartPie size={24} />,
    },
    {
        path: 'theodoi',
        text: 'Theo Dõi',
        icon: <MdOutlineFeed size={24} />,
    },
];
