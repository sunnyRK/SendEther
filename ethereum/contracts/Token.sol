pragma solidity ^0.4.17;

contract token {
    
    mapping(address => uint256) public balances;
    mapping(uint256 => address) public register;
    uint256 lastOfId;
    
    function token() public {
        lastOfId = 0;
    }
    
    function sendEther(address  _toAddress, uint256 value) public payable returns(string memory) {
        require(msg.value == value);
        _toAddress.transfer(msg.value);
        balances[_toAddress] = balances[_toAddress] + value; 
        return "Success";
    }
    
    function balanceOf(address _addr) public view returns(uint256) {
        return balances[_addr];
    }
    
    function registerAddress(address _addr) public {
        register[lastOfId] = _addr;
        lastOfId = lastOfId + 1;
    }
    
    function getAddress(uint256 id) public view returns(address) {
        return register[id];
    }
    
    function getLengthOfRegister() public view returns (uint256){
        return lastOfId;
    }
}