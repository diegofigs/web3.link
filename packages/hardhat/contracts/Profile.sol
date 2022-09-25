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
    string[] public activeLinks;
    mapping(string => Link) public links;

    constructor(string memory _username, address sender) {
        username = _username;
        owner = sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    modifier equalLength(string[] calldata arg1, string[] calldata arg2) {
        require(arg1.length == arg2.length, "Not equal length");
        _;
    }

    function updateProfile(string memory _name, string memory _bio)
        public
        onlyOwner
    {
        name = _name;
        bio = _bio;
    }

    function updateLinks(
        string[] calldata linkNames,
        string[] calldata linkList
    ) public onlyOwner equalLength(linkNames, linkList) {
        activeLinks = new string[](linkNames.length);
        for (uint256 i = 0; i < linkNames.length; i++) {
            activeLinks[i] = linkList[i];
            links[linkList[i]] = Link(linkNames[i], linkList[i]);
        }
    }
}
