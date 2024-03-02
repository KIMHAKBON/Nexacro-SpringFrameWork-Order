(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testVirtualFile");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","59","28","126","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","234","42","114","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("open");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testVirtualFile.xfdl", function() {
        this.downloadURI = function (blob, name) {
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // IE에서 동작
            window.navigator.msSaveBlob(blob, name);
          } else {
            // 크롬에서 동작
            var link = document.createElement('a');
            link.download = name;
            link.href = URL.createObjectURL(blob);
            link.click();
            delete link;
          }
        }

        this.download = function (strData, strFileName, strMimeType) {
            var D = document,
                A = arguments,
                a = D.createElement("a"),
                d = A[0],
                n = A[1],
                t = A[2] || "text/plain";

            //build download link:
            a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);

        	if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                var blobObject = new Blob([strData]);

                return window.navigator.msSaveBlob(blobObject, strFileName);
        	}

            if ('download' in a) { //FF20, CH19
                a.setAttribute("download", n);
                a.innerHTML = "downloading...";
                D.body.appendChild(a);
                setTimeout(function() {
                    var e = D.createEvent("MouseEvents");
                    e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    a.dispatchEvent(e);
                    D.body.removeChild(a);
                }, 66);
        	}
                return true;
         };

        this.Button00_onclick = function(obj,e)
        {
        	this.download('the content of the file', 'chh_filename.txt', 'text/plain');
        //	this.downloadURI('the content of the file', 'downloadURI.txt');
        };


        this.Button01_onclick = function(obj,e)
        {
        	var app = nexacro.getApplication();
        	app.mainframe.set_titletext("kkkkk");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("testVirtualFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
