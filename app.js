importPackage(java.io);
importPackage(java.lang);
importPackage(java.sql);
importPackage(java.util);
importPackage(org.postgresql);

function alertMessage(text) {
    alert(text)
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getTransactionInfo(no_id) {
  var c = null;
  var exitCode = 1;
  var except = null;

  try {
    c = DriverManager.getConnection("jdbc:postgresql://178.128.80.162:5432/parkir", "postgres", "521478");
    var meta = c.getMetaData();
    console.log(meta.getDatabaseProductName());
  }
  catch (e) {
      except = e.javaException;
      console.log(except);
  } finally {
    if (except != null) {
        if (except instanceof IOException) {
            println(except.getMessage());
            exitCode = 2;
            } else if (except instanceof SQLException) {
                for (var iter = except.iterator(); iter.hasNext();) {
                    var e = iter.next();
                    println(e.getMessage());
                    if (e instanceof SQLException)
                        println("SQLSTATE: " + except.getSQLState());
                }
                exitCode = 1;
            }
        } else if (c != null) {
            c.close();
            exitCode = 0;
        }
  }
}