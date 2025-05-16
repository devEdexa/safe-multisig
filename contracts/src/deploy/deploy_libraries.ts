import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getDeployerAccount } from "../utils/deploy";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments } = hre;
    const deployerAccount = await getDeployerAccount(hre);
    const { deploy } = deployments;

    await deploy("CreateCall", {
        from: deployerAccount,
        args: [],
        log: true,
        deterministicDeployment: true,
         gasLimit:'20000000',
        gasPrice:"47619047600",
    });

    await deploy("MultiSend", {
        from: deployerAccount,
        args: [],
        log: true,
        deterministicDeployment: true,
         gasLimit:'20000000',
        gasPrice:"47619047600",
    });

    await deploy("MultiSendCallOnly", {
        from: deployerAccount,
        args: [],
        log: true,
        deterministicDeployment: true,
         gasLimit:'20000000',
        gasPrice:"47619047600",
    });

    await deploy("SignMessageLib", {
        from: deployerAccount,
        args: [],
        log: true,
        deterministicDeployment: true,
         gasLimit:'20000000',
        gasPrice:"47619047600",
    });

    await deploy("SafeToL2Setup", {
        from: deployerAccount,
        args: [],
        log: true,
        deterministicDeployment: true,
         gasLimit:'20000000',
        gasPrice:"47619047600",
    });
};

deploy.tags = ["libraries", "l2-suite", "main-suite"];
export default deploy;
