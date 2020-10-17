import React,{useState,useEffect} from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import {StyledBlockInfo} from './styles/StyledBlockInfo';

const Block = () => {
    const [hash,setHash] = useState('');
    const [number, setNumber] = useState('');
    const [parentHash,setParentHash] = useState('');
    const [stateRoot,setStateRoot] = useState('');
    const [extrinsicsRoot,setExtrinsicsRoot] = useState('');
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');    
 

    const chainState = async () => {

        const api = await ApiPromise.create({ provider: wsProvider });
        
        // Retrieve the latest header
        const lastHeader = await api.rpc.chain.getHeader();

        setNumber(lastHeader.number.toString());
        setHash(lastHeader.hash.toString());
        setParentHash(lastHeader.parentHash.toString());
        setStateRoot(lastHeader.stateRoot.toString());
        setExtrinsicsRoot(lastHeader.extrinsicsRoot.toString());

    } 

    useEffect( () => {
        chainState();
    })

        return (
            <StyledBlockInfo>
                <div className='blockinfo-content'>
                    <div className='blockinfo-text'>
                        <h1>LATEST POLKADOT BLOCK NUMBER</h1>
                        <h0>{number}</h0>
                        <h2>HASH : {hash}</h2>

                    </div>
                </div>
            </StyledBlockInfo>
        )
 
}

export default Block;
