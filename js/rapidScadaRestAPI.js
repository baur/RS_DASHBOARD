const GetCurCnlData = (chart, cnlNum) => {
    axios.get('http://zhezasutpapp01/scada/ClientApiSvc.svc/GetCurCnlData', {
        params: {
            cnlNum: cnlNum
        }
    })
        .then((response) => {
            const cnlVal = JSON.parse(response.data.d).Data.Val;
            //console.log(cnlVal);
            chart.load({
                columns: [
                    ['data', Number((cnlVal).toFixed(2))]
                ]
            });

        })
        .catch((error) => {
            return null;
        });
    //return 0;
};
const GetCurCnlHourData = (chart, cnlNum) => {
    axios.get('http://zhezasutpapp01/scada/ClientApiSvc.svc/GetHourCnlData', {
        params: {
            year: 2020,
            month: 1,
            day: 8,
            startHour: 0,
            endHour: 23,
            cnlNums: cnlNum,
            viewIDs: 10,
            viewID: 10,
            existing: true,
            dataAge: null
        }
    })
        .then((response) => {
            const json_data = JSON.parse(response.data.d);
            var result = ['ruda'];
            for (var i in json_data.Data) {
                result.push(json_data.Data[i].CnlDataExtArr[0].Val);
            }
            chart.load({
                columns: [result]
            });
        })
        .catch((error) => {
            console.log(error);
        });
};