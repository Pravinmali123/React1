import Table from "./Components/Table";

function Rigult() {
  return(
 <div ClassName="App">
 <table border={1} align="center" cellSpacing={0} cellPadding={8}>

        <tr>
          <th colSpan={9}>
            <h2>Students Regult</h2>
          </th>
        </tr>
        <tr>
            
            <th>Name</th>
            <th>Computer</th>
            <th>Giography</th>
            <th>Philosophy</th>
            <th>Social Sceince</th>
            <th>Total mark</th>
            <th>Percentage</th>
            <th>Grade</th>
            <th>Pass/Fail</th>
        </tr>
        <Table Name ="Vaibhav" Computer="65" Giography="89" Philosophy="25" SocialSceince="85" />
        <Table Name ="Subhash" Computer="55" Giography="64" Philosophy="78" SocialSceince="49" />
        <Table Name ="Akhilesh" Computer="98" Giography="91" Philosophy="91" SocialSceince="97" />
        <Table Name ="Ankur" Computer="35" Giography="66" Philosophy="58" SocialSceince="57" />
        <Table Name ="Mahesh" Computer="30" Giography="45" Philosophy="75" SocialSceince="35" />
        <Table Name ="Kiran" Computer="85" Giography="87" Philosophy="91" SocialSceince="71" />
            </table> 
            
 
  
  
  </div>
);
}

 export default Rigult;