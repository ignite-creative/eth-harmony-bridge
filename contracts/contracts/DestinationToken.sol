// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract DChainstackDollars is ERC20, ERC20Burnable {
    address bridge;

    constructor(address _bridge) ERC20("DChainstackDollars", "D-CHSD") {
        bridge = _bridge;
    }

    modifier onlyBridge() {
        require(
            bridge == msg.sender,
            "DChainstackDollars: only the bridge can trigger this method!"
        );
        _;
    }

    function mint(address _recipient, uint256 _amount)
        public
        virtual
        onlyBridge
    {
        _mint(_recipient, _amount);
        console.log("Token minted for %s", _recipient);
    }

    function burnFrom(address _account, uint256 _amount)
        public
        virtual
        override(ERC20Burnable)
        onlyBridge
    {
        super.burnFrom(_account, _amount);
        console.log("Tokens burned from %s", _account);
    }
}
