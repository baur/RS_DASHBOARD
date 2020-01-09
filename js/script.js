var chart1 = c3.generate({
    bindto: '#chart1',
    transition: {
        duration: 0
    },
    data: {
        columns: [
            ['data', 44.4]
        ],
        type: 'gauge',
    },
    gauge: {
        units: ' кг',
        width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#f2495c', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
            unit: 'value', // percentage is default
            //            max: 200, // 100 is default
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 220
    }
});


var chart2 = c3.generate({
    bindto: '#chart2',
    transition: {
        duration: 0
    },
    data: {
        columns: [
            ['data', 44.4]
        ],
        type: 'gauge',
    },
    gauge: {
        label: {
            format: function (value, ratio) {
                return value;
            },
        },
        units: ' кг',
        width: 39,
        min: 0,
        max: 1500
    },
    color: {
        pattern: ['#f2495c', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
            unit: 'value', // percentage is default
            //            max: 200, // 100 is default
            values: [30, 60, 1300, 1400],

        }
    },
    size: {
        height: 220
    }
});


var chart3 = c3.generate({
    bindto: '#chart3',
    data: {
        //    	 type: 'bar',
        columns: [
            ['ruda', 0],
        ]
    }
});
