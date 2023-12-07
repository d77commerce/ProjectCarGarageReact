import{Button,ControlContainer,Label} from '../styledComponents/StyledComponents';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



export default function OwnerSettings() {

    return (
        <>
        <div className="left-side" id="auth-inputs">
            <Label >Time Table</Label>
            <Calendar />
        </div>
        <div id='auth-inputs'>
            <h1>Owner Settings</h1>
            <ControlContainer>
                <Label >All Mechanics</Label>
                <Link to='/mechanics'><Button>view</Button></Link>
                <Label >Set Time Table</Label>
              <Link to='/timetable'><Button>Set</Button></Link>
            </ControlContainer>
        </div>

        
             </>
    )
}