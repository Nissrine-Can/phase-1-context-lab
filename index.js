/* Your Code Here */
function createEmployeeRecord(recordArray) {
    return {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(recordRows) {
    return  recordRows.map(recordArray => createEmployeeRecord(recordArray))
}

function createTimeInEvent(dateStamp) {
  const inEventObj  = {type: "TimeIn",
                                        date: dateStamp.slice(0, 10),
                                        hour: parseInt(dateStamp.slice(11))
                                             }
    this.timeInEvents.push(inEventObj)
     return this
    
}

function createTimeOutEvent(dateStamp) {
    const outEventObj  = {type: "TimeOut",
                                          date: dateStamp.slice(0, 10),
                                          hour: parseInt(dateStamp.slice(11))
                                               }
       this.timeOutEvents.push(outEventObj)
       return this
  }
  
  function hoursWorkedOnDate(date) {

        let hourIn = this.timeInEvents.find(el => {
            return el.date === date
        })
        let hourOut = this.timeOutEvents.find(el => {
            return el.date === date
        })
        let hours = (hourOut.hour - hourIn.hour)/100
         return hours
}
  
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employeesRecord, firstName) {
        return     employeesRecord.find(function(rec) {
                      rec.firstName === firstName
                     return rec
                    })
}




function calculatePayroll(employeesRecord) {
    
    return employeesRecord.reduce((memo, rec) => {
        
        return memo + allWagesFor.call(rec)
    },  0)
}


