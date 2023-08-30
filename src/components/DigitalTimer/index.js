// Write your code here
import {Component} from 'react'

'./import index.css'

const initialState = {
    isTimerRunning:false,
    timeElapsedInSecond:0,
    timeLimitInMinutes:25
}

class DigitalTimer extends Component{
    state = initialState

    componentWillUnmount()=>{
        this.clearTimerInterval()
    }

    clearTimeInterval = ()=>clearInterval(this.intervalId)

    onDecreaseTimerLimitInMinutes = ()=>{
        const {timerLimitInMinutes} = this.state

        if(timerLimitInMinutes > 1){
            this.setState(prevState=> ({
                timerLimitInMinutes:prevState.timerLimitInMinutes - 1

            }))
        }
    }


    onIncreaseTimerLimitInMinutes ()=>{
        this.setState(prevState => ({
            timerLimitInMinutes : prevState.timerLimitInMinutes + 1
        }))
    
        renderTimerLimitController = ()=> {
            const {timerLimitInMinutes,timeElapsedInSeconds} = this.state 
            const isButtonDisabled = timeElapsedInSeconds >  0

            return (
                <div className = "timer-limit-controller-container">
                    <p className = "limit-label"> Set Timer Limit </p>
                    <div className = "timer-limit-container">
                    <button className = "limit-controller-button"
                    disabled = {isButtonDisabled}
                    onClick = {this.onDecreaseTimerLimitInMinutes}
                    type = "button">-</button>
                    <div className = "limit-label-value-container">
                        <p className = "limit-value"> {timerLimitInMinutes}</p>
                    </div>
                    <button className = "limit-controller-button"
                    disabled = {isButtonDisabled}
                    onClick = {this.onIncreaseTimerLimitInMinutes}
                    type = "button">
                        +
                    </button>
                       
                    </div>
                </div>


            )
        }

        onResetTimer = ()=>{
            this.clearTimeInterval()
            this.setState(initialState)
        }

        incrementTimeElapsedInSeconds = ()=> {
            const {timerLimitInMinutes,timeElapsedInSeconds} = this.state
            const isTimerCompleted = timerElapsedInSeconds === timerLimitInMinutes * 60 
            if (isTimerCompleted ){
                this.clearTimerInterval()
                this.setState(isTimerCompleted:false)
            }
            else{
                this.setState(prevState=>({
                    timeElapsedInSeconds : prevState.timeElapsedInSeconds + 1
                }))
            }

        }

        onStartOrPauseTime=()=>{
            const 
            {isTimerRunning, 
            timeElapsedInSeconds,
            timerLimitInMinutes,} = this.state

            const isTimerCompleted = isTimeElapsedInSeconds === timerLimitInMinutes *60 

            if (isTimerCompleted) { 
                this.state({timeElapsedInSeconds : 0})
            }
            if (isTimerCompleted){
                this.clearTimerInterval()
            }
            else{
                this.intervalId=setInterval(this.timeElapsedInSeconds,1000)
            }
            this.setState(prevState => ({isTimerRunning : !prevState.isTimerRunning}))
        }

        renderTimerController = ()=> {
            const{isTimerRunning} = this.state
            const startOrPauseImageUrl = isTimerRunning
            ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
            : "https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        startOrPauseAltText = isTimerRunning ? "pause icon" : "Play icon"

        return (
            <div className = "timer-controller-container">
                <button className = "timer-controller-button"
                onClick = {this.onStartOrPauseTimer}
                type = "button">
                    <img 
                    alt = {startOrPauseAltText}
                    className = "timer-controller-icon"
                    src = {startOrPauseImageUrl}/>
                    <p className = "timer-controller-label">
                        Set time
                    </p>

                </button>
            </div>
        )
        }
        getElapsedSecondsTimeFormat = ()=> {
            const {timerLimitInMinutes,timeElapsedInSeconds} = this.state

            const totalRemainingSeconds = 
            timerLimitInMinutes * 60 - timeElapsedInSeconds 
            const minutes = Math.floor(totalRemaining / 60)
            const seconds = Math.floor(totalRemainingSeconds % 60)
            stringifiedMinutes = minutes > 9  ? minutes : `0${minutes}`
            stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
            
            return `stringifiedMinutes : stringifiedSeconds`
            
            
            
        }

        render(){
            const {isTimerRunning} = this.state

            const labelText = isTimerRunning ? "Running" : "Pause"

            <div className = "app-container">
                <h1 className = "heading"> Digital Timer</h1>
                <div className = "digital-timer-container">
                    <div className = "display-timer-container">
                        <div className = "elapsed-time-container">
                            <h1 className = "elapsed-time">
                            {this.getElapsedSecondsTimeFormat}
                            </h1>
                            <p className = "timer-state"> {labelText}</p>
                        </div>
                    </div>
                    <div className = "control-container">
                        {this.renderTimerController()}
                        {this.renderTimerLimitController()}
                    </div>
                </div>
            </div>
        }

        
    }



}


export default DigitalTimer

