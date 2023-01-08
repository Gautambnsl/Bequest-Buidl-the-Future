import BeQuestLogo from "../assests/final-logo.png";
import Metamask from "../assests/metamask.svg";
import WalletConnect from "../assests/walletconnect.svg";
import Ledger from "../assests/ledger.svg";
import { connectWallet } from "../backendConnectors/connectWallet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../components/Error";
import { changeChain } from "../backendConnectors/integration";
import coinBase from "../assests/coinbase.png"

import Polygon from "../assests/polygon.png";
import klaytn from "../assests/klaytn.png";
import { coinbaseWallet } from "../backendConnectors/coinbase";

const DEFAULT_ETH_JSONRPC_URL = 'https://rpc-mumbai.maticvigil.com/'

const DEFAULT_CHAIN_ID = 8001  

function Wallet() {
	const navigate = useNavigate();
	const [err, setErr] = useState({
		state: false,
		message: "",
	});

	async function redirctAfterConnect() {
		connectWallet().then((res) => {
			if (res.success) {
				navigate("/dashboard");
			} else {
				// error
				setErr({
					state: true,
					message: res.msg,
				});

				setTimeout(() => {
					setErr({
						state: false,
						message: "",
					});
				}, 2000);
			}
		});
	}

	return (
		<div className="wallet">
			{err.state && <Error message={err.message} />}

			<div className="wallet-logo">
				<img src={BeQuestLogo} alt="" />
			</div>

			<div className="wallet-chains">
				<h2 className="wallet-chains__head">Supported these TestNet</h2>

				<div className="wallet-chains__list">
					<img
						src={Polygon}
						onClick={() => {
							changeChain("0x13881");
						}}
						alt="Polygon"
					/>

					<img
						src={klaytn}
						onClick={() => {
							changeChain("0x3e9");
						}}
						alt="Moonbeam"
					/>
					
				</div>
			</div>

			<div className="wallet-collection">
				<h2 className="wallet-collection__head">Connect a Wallet</h2>

				<button
					onClick={redirctAfterConnect}
					className="wallet-collection__item"
				>
					<img src={Metamask} alt="" />

					<span className="wallet-collection__item-name wallet-name">
						Metamask
					</span>
				</button>

				<button className="wallet-collection__item"
				onClick={()=>coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)}>
					<img src={coinBase} alt="" />

					<span className="wallet-collection__item-name wallet-flex">
						<span className="wallet-name">Coinbase Wallet</span>
						{/* <span className="coming-soon pacifico">{" (Coming Soon)"}</span> */}
					</span>
				</button>

				<button className="wallet-collection__item">
					<img src={Ledger} alt="" />

					<span className="wallet-collection__item-name wallet-flex">
						<span className="wallet-name">Ledger</span>
						<span className="coming-soon pacifico">{" (Coming Soon)"}</span>
					</span>
				</button>
			</div>
		</div>
	);
}

export default Wallet;
