import { FaEthereum, FaWonSign } from "react-icons/fa"
import { SiWebmoney } from "react-icons/si"
import WalletsCoinBox from "./WalletsCoinBox";
import WalletsProgress from "./WalletsProgress";
import {useSelector} from "react-redux";

const Wallets = ({ isConnected }) => {

    const userEthereum = useSelector((state) => state.metaEthereum.metaEthereum);

    return(
        <div className="Wallets">
            <h3>My wallets</h3>
            <div className="wallets-wrap">
                <ul className={isConnected ? "coin-wrap flex-box" : "coin-wrap flex-box blur"}>
                    <WalletsCoinBox
                        coinSmName="CED"
                        coinName="Cedars"
                        coinAmount="10.3454"
                        icon={<SiWebmoney size={23} />}
                    />
                    <WalletsCoinBox
                        coinSmName="ETH"
                        coinName="Ethereum"
                        coinAmount={isConnected ? userEthereum : "223.4453"}
                        icon={<FaEthereum size={25} />}
                    />
                    <WalletsCoinBox
                        coinSmName="KRW"
                        coinName="KRW"
                        coinAmount="2,120,000"
                        icon={<FaWonSign size={23} />}
                    />
                </ul>
            </div>
            <div className={isConnected ? "flex-box" : "flex-box blur"} style={{marginTop: "3%"}}>
                <WalletsProgress />
                <div className="empty inner-cont" style={{width: "53%", height: "178px", padding: "20px"}}>Current Balance</div>
            </div>
        </div>
    )
}



export default Wallets;