import { Fragment } from "react";
import AdduserModal from "./AdduserModal";
import UserList from "./UserList";

const Home = () => {
    
    return (
        <Fragment>
            <div class="container">
                <h1 className="mt-5">React Curd App with Redux</h1>
                <div className="mt-5">
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Creat User
                    </button>
                </div>
                <div>
                    <AdduserModal/>
                    <UserList/>
                </div>
            </div>
        </Fragment>
    )
}
export default Home;