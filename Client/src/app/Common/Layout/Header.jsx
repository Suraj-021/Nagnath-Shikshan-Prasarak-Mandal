import Link from "next/link";

const Header = () => {
    return (
        <header style={{ width: "100%", background: "#fff", borderBottom: "1px solid #eee", padding: "16px 32px", boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#fd7e14', fontWeight: 700, fontSize: 24 }}>
                NSPM School Management
            </Link>
        </header>
    );
};

export default Header;