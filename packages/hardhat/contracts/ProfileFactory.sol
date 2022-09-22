pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract ProfileFactory {
    constructor() payable {
        // what should we do on deploy?
    }

    // to support receiving ETH by default
    receive() external payable {}
    fallback() external payable {}

    address public owner = 0x150815232dC9a16d8135306D78dB6D67fCcDEDBa;
    Profile[] private _profiles;
    function createProfile(string memory newUsername) public {
      Profile profile = new Profile(newUsername, msg.sender);
      _profiles.push(profile);
    }
    function allProfiles() view public returns (Profile[] memory){
      return _profiles;
    }
}

contract Profile {
    string public username;
    address public owner;

    constructor(string memory newUsername, address sender) {
        username = newUsername;
        owner = sender;
    }

    function updateProfile(string memory newUsername) public {
        // add username uniqueness check here
        username = newUsername;
    }
}
