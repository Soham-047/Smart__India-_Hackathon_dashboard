var s = 0;
var points = new Array();
function option1()
{
    points.push(1);
}
function option2()
{
    points.push(2);
}
function option3()
{
      points.push(3);
    }
    function option4()
    {
      points.push(4);
  }
    function myFunction() {
        // Get the text field
        var copyText = document.getElementById("myInput");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
        // Alert the copied text
        alert("Copied the text: " + copyText.value);

        
        
        for (let i = 0; i < points.length; i++)
        {
            s += points[i];
        }
        alert(s);

        var button = document.getElementById("btn"),
        input = document.getElementById("myInput");
      button.addEventListener("click", function(event) {
        event.preventDefault();
        input.select();
        document.execCommand("copy");
      });
      // Start file download.
      document.getElementById("btn").addEventListener("click", function() {
        // Generate download of hello.txt
        // file with some content
        var text = document.getElementById("myInput").value;
        var filename = "Output.txt";
        download(filename, text);
      }, false);

      function download(file, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
        element.setAttribute('download', file);
        document.body.appendChild(element);
        //onClick property
        element.click();
        document.body.removeChild(element);
      }
      }
