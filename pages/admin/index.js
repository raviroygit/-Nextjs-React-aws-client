import Layout from '../../components/Layout';
import withAdmin from '../withAdmin';
import Link from 'next/link';
import Footer from '../footer/footer';
import Search from '../../components/search/Search';
const Admin = ({ user }) => (
    <React.Fragment>
        <Layout>
            <Search/>
        <h1>Admin Dashboard</h1>
        <br />
        <div className="row">
            <div className="col-md-4">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="/admin/category/create" className="nav-link">
                            Create category
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/category/read">
                            <a className="nav-link">All categories</a>
                        </Link>
                    </li>
                 
                    <li className="nav-item">
                        <Link href="/admin/link/read">
                            <a className="nav-link">All Links</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/blog/create">
                            <a className="nav-link">Create Blog</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-8"></div>
        </div>
    </Layout>
    </React.Fragment>
);

export default withAdmin(Admin);
