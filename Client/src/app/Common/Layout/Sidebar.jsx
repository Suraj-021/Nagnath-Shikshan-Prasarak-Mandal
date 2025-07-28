import Link from "next/link";

const Sidebar = () => {
  return (
    <nav style={{ minWidth: 200, background: "#f8f9fa", height: "100vh", padding: 24, boxSizing: 'border-box' }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: 16 }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}>Home</Link>
        </li>
        <li style={{ marginBottom: 16 }}>
          <Link href="/admin/classes" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}>Classes</Link>
        </li>
        <li style={{ marginBottom: 16 }}>
          <Link href="/admin/classes/class5/students" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}>Students</Link>
        </li>
        <li style={{ marginBottom: 16 }}>
          <Link href="/admin/classes/class5/teachers" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}>Teachers</Link>
        </li>
        <li style={{ marginBottom: 16 }}>
          <Link href="/admin/notices" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}>Notices</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;