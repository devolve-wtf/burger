const connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      if (Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
      }
    }
  
    return arr.toString();
}

const orm = {
    selectAll: function(tableName, callback) {
        let queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            callback(result);
        });
    },
    insertOne: function(tableName, cols, vals, callback) {
        let queryString = 'INSERT INTO ' + tableName;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        //Log for testing
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) throw err;
            callback(result);
        });
    },
    updateOne: function(tableName, objColVals, condition, callback) {
        let queryString = 'UPDATE ' + tableName;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        //Log for testing
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            callback(result);
        });
    }
    
};

module.exports = orm;