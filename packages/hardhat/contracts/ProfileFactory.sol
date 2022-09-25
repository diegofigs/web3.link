pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./Profile.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract ProfileFactory {
    constructor() payable {
        // what should we do on deploy?
    }

    // to support receiving ETH by default
    receive() external payable {}

    fallback() external payable {}

    Profile[] public profiles;

    function createProfile(string memory _username) public {
        Profile profile = new Profile(_username, msg.sender);
        profiles.push(profile);
    }

    function allProfiles() public view returns (Profile[] memory) {
        return profiles;
    }
}


