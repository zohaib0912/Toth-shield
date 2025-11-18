
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        mega_menus?: {
            link: string;
            title: string;
        }[];
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "Shields",
        link: "/shields",
        has_dropdown: false,
    },
    {
        id: 3,
        title: "For Agents",
        link: "/become-a-pro",
        has_dropdown: false,
    },
    {
        id: 4,
        title: "Resources",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/free-hail-report", title: "Free Hail Report" },
            { link: "/terms-of-services", title: "Terms of Service" },
            { link: "/privacy-policy", title: "Privacy Policy" },
            { link: "/refund-cancellation-policy", title: "Refund & Cancellation" },
            { link: "/legal-notice", title: "Legal Notice" },
        ],
    },
    {
        id: 5,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;