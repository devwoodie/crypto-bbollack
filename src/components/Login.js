import { FaUser } from "react-icons/fa";

const Login = (props) => {
    const { isConnected, connectWallet, walletAddress } = props;

    const displayWalletAddress = `${walletAddress?.substring(0,15)}...`;

    return(
        <>
            {isConnected ? (
                <div className="Login true">
                    <span className="user-name">{displayWalletAddress}</span>
                    <div className="user-image"><span><FaUser /></span></div>
                </div>
            ) :
                <div className="Login" onClick={connectWallet}>
                    <span className="user-name">Connect METAMASK</span>
                    <div className="user-image"><span><FaUser /></span></div>
                </div>
            }
        </>
    )
}

export default Login;