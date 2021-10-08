// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./interfaces/IDiscounter.sol";

//This is a Mock discounter for tests
contract Discounter is IDiscounter {
    function getNumberOfFreeTickets(address buyer, uint256 numberTickets) external override pure returns (uint256) {
        if(buyer != address(0) && numberTickets > 3) {
            return 1;
        }
        return 0;
    }
}