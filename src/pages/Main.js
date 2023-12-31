import Overview from "../components/Overview";
import Wallets from "../components/wallets/Wallets";
import Transactions from "../components/Transactions";
import Fee from "../components/Fee";
import Purchase from "../components/purchase/Purchase";
import Quotes from "../components/Quotes";


const Main = ({ isConnected }) => {
    return(
        <div className="Main">
            <div className="cont-wrap flex-box">
                <div className="left-cont">
                    <div className="left-top-cont flex-box">
                        <Overview />
                        <Wallets isConnected={isConnected} />
                    </div>
                    <div className="left-bottom-cont flex-box">
                        <Purchase />
                        <Quotes />
                    </div>
                </div>
                <div className="right-cont">
                    <Transactions isConnected={isConnected} />
                    <Fee />
                </div>
            </div>
        </div>
    )
}

export default Main;
