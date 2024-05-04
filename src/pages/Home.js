import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import LoginPage from "./LoginPage";

function Home() {
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            {/* <LoginPage></LoginPage> */}
        </div>
    );
}
export default Home;
