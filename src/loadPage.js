import createTabs from "./tabs"
import getStarted from "./gettingStarted";
import myForm from "./formT0Do";
import doToDo from "./project";



function initialChange(){
    createTabs()
    getStarted()
    myForm()
    doToDo()
}
export default initialChange;