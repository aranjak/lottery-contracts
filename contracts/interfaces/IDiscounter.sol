// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

interface IDiscounter {
    function getNumberOfFreeTickets(address buyer, uint256 numberTickets) external view returns (uint256); 
}