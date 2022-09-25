pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

contract Profile {
    string public username;
    address public owner;

    string public name;
    string public bio;

    struct Link {
        string name;
        string link;
    }
    Link[] public links;

    constructor(string memory _username, address sender) {
        username = _username;
        owner = sender;
    }

    function updateProfile(string memory _name, string memory _bio) public {
        name = _name;
        bio = _bio;
    }

    function updateLinks() public {}
}
