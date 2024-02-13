import{styled} from 'styled-components'

export const ControlContainer=styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 1.5rem;
`;
export const Label=styled.label`
display: block;
margin-bottom: 0.5rem;
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: ${({$props})=>($props ? '#f87171' : '#6b7280')} ;
`;
export const Input = styled.input`
width: 100%;
padding: 0.75rem 1rem;
line-height: 1.5;
background-color: ${({$props})=>($props ? '#fed2d2' : '#d1d5db')}  ;
color: ${({$props})=>($props ? '#ef4444':'#374151')} ;
border: 1px solid ${({$props})=>($props ? '#f73f3f' : 'transparent')}  ;
border-radius: 0.25rem;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
export const Button=styled.button`
padding: 1rem 2rem;
font-weight: 600;
text-transform: uppercase;
border-radius: 0.25rem;
color: #1f2937;
background-color: #f0b322;
border-radius: 6px;
border: none;
&:hover{

    background-color: #f0920e;
}
`;
export const ButtonR = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  margin-left: auto; /* Align to the right */
  
  &:hover {
    background-color: #f0920e;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row; /* Change to row */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  width: 100%; /* Use full width */
  gap: 20px; /* Add some space between form elements */
  margin: 20px; /* Add margin to the top */
 
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  th {
    background-color: #f0920e;
    color: white;
  }
`;
export const Card = styled.div`
  border: 4px solid gray;
  padding: 22px;
  margin: 2px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Table = styled.table`
border: 2px solid orange;
  width: 100%;
  margin: 20px;
`;

export const TableHeader = styled.thead`
  th {
    text-align: center;
    padding-right: 10px;
  }
`;

export const TableBody = styled.tbody`
  td {
    text-align: center;
    padding-bottom: 5px;
  }
`;

export const TableRow = styled.tr`
  background-color: #eee;
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

export const LeftSideMenuContainer = styled.div`
  width: 20%;
  height: auto;
  background-color: #2c3e50; /* Set your preferred background color */
  display: flex;
  flex-direction: column;
 
  padding: 20px;
`;

export const LeftMenuItem = styled.a`
  color: #ecf0f1; /* Set your preferred text color */
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  background-color: #2c3e50; /* Set your preferred background color */
  color: #ecf0f1; /* Set your preferred text color */
  padding: 20px;
  text-align: center;
`;