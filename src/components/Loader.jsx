import {Html,useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();
  return (
    <html>
      <span className='canvas-loader'></span>
      <p 
        style={{
          fontSize : 14,
          color:'#f1f1f1',
          fontWeight:800,
          marginTop:40
        }}  
      >{progress.toFixed(2)}%</p>
    </html>
  )
}

export default Loader