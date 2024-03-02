(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpTransfer");
            this.set_titletext("FileUpTransfer 파일 업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileinfo", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadfile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","1020","8",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","36","1020","8",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","8","8","552",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","712","36","8","517",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","6","552","1019","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","11","11","301","22",null,null,null,null,null,null,this);
            obj.set_text("FileUpTransfer(POST) 를 이용한 파일 업로드");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result","10","405","700","145",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_value(" ");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","376","720","8",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute01","724","47","75","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일선택");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","724","81","288","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("addFile(strID,objVFile)");
            obj.set_background("darkgreen");
            obj.set_color("white");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute00","724","218","75","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("업로드");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","11","47","698","170",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_fileinfo");
            obj.set_useselcolor("false");
            obj.set_border("1px solid");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"50\"><Cell id=\"Cell_FileName\" left=\"5\" top=\"5\" width=\"610\" height=\"20\" text=\"bind:filename\"/><Cell id=\"Cell_FileSize\" left=\"633\" top=\"5\" width=\"110\" text=\"bind:filesize\" height=\"20\"/><Cell id=\"Cell_Progress\" left=\"5\" top=\"30\" width=\"739\" bottom=\"7\" displaytype=\"progressbarcontrol\" text=\"bind:LOADED\" progressbarsmooth=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute02","932","288","80","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("- remove File");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","724","257","288","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("removeFile(strID)");
            obj.set_color("white");
            obj.set_background("darkgreen");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","221","720","8",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","724","113","206","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("nexacroUploadFiles");
            obj.set_text("nexacroUploadFiles");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","724","145","286","43",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("<input type=\"file\" name=\"nexacroUploadFiles\">적용 \r\nFileUploadCommand.java 파일의 setNexacroUploadFiles \r\nMethod 와 연결됨");
            obj.set_color("crimson");
            obj.set_background("aliceblue");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 300 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","724","288","206","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("nexacroUploadFiles");
            obj.set_text("nexacroUploadFiles");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute03","932","113","80","27",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("+ add File");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","1016","0","8","552",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("darkcyan");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_filelist","11","231","700","143",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_uploadfile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"450\"/><Column size=\"100\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일아이디\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일크기\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:fileid\"/><Cell col=\"1\" text=\"bind:filename\"/><Cell col=\"2\" text=\"bind:filesize\"/><Cell col=\"3\" expandshow=\"show\" expandsize=\"30\" expandimage=\"url(&apos;theme://images/btn_TF_Close_O.png&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title00","11","385","301","22",null,null,null,null,null,null,this);
            obj.set_text("파일처리 화면 로그");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,818,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pattern03-FileUpTransfer.xfdl", function() {
        /***********************************************************************
        * 설명      : pattern03-FileUpTransfer Upload
        * 작성일    : 2019.06.11
        * 작성자    : 이동혁
        * 수정이력  :
        ***********************************************************************

        ** 테스트 방법
        1. "FileDialog00.open" 버튼을 클릭하여 임의의 파일을 선택한다.
        2. "addFile(strID,objVFile)" 우측에 있는 Edit에 "nexacroUploadFiles"을 입력한다. --> 서비스의 FileUploadCommand.java 파일과 연결됨
        3. "+ add File" 버튼을 클릭한다.
        -> TextArea에 "addFile Success" 가 출력되는지 확인한다.
        4. "upload" 버튼을 클릭한다.
        -> TextArea에 하기와 같이 나타나는지 확인한다.
        FileUpTransfer00_existFile : true
        FileUpTransfer00_onprogress
        FileUpTransfer00_onprogress
        ========FileUpTransfer00_onsuccess========
        e.eventid : onsuccess
        e.fromobject : [object FileUpTransfer]
        e.fromreferenceobject : [object FileUpTransfer]
        e.url : http://172.10.13.91:8080/x-api/FileTransfer/jsp/fileUpload_XML.jsp
        e.code : 0
        e.message : Success
        ==============================================
        5. "removeFile(strID)" 우측에 있는 Edit에 "nexacroUploadFiles"을 입력한다.--> 서비스의 FileUploadCommand.java 파일과 연결됨
        6. "- remove File" 을 클릭한다.
        7. TextArea에 "removeFile Success"가 나타나는지 확인한다.
        8 "upload" 버튼을 클릭한다.
        9. TextArea에 "FileUpTransfer00_existFile : false" 가 출력되는지 확인한다.



        ***********************************************************************/

        /***********************************************************************
        * 01 : 이벤트 선언부
        ***********************************************************************/

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n========FileUpTransfer00_onerror========");
        	this.txt_result.set_value(this.txt_result.value + "\ne.errormsg : "+e.errormsg);
        	this.txt_result.set_value(this.txt_result.value + "\ne.errortype : "+e.errortype);
        	this.txt_result.set_value(this.txt_result.value + "\n==============================================");
        };


        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this.txt_result.set_value(this.txt_result.value + "\n========FileUpTransfer00_onsuccess========");
        	this.txt_result.set_value(this.txt_result.value + "\ne.eventid : "+e.eventid);
        	this.txt_result.set_value(this.txt_result.value + "\ne.fromobject : "+e.fromobject);
        	this.txt_result.set_value(this.txt_result.value + "\ne.fromreferenceobject : "+e.fromreferenceobject);
        	this.txt_result.set_value(this.txt_result.value + "\ne.url : "+e.url);
        	this.txt_result.set_value(this.txt_result.value + "\ne.code : "+e.code);
        	this.txt_result.set_value(this.txt_result.value + "\ne.message : "+e.message);
        	this.txt_result.set_value(this.txt_result.value + "\n==============================================");

        	//Grid데이터셋에 데이터 복사.
        	this.ds_uploadfile.copyData(e.datasets[0]);

        	//업로드 후 파일업로드 리스트 초기화(선택적 적용)
        	this.FileUpTransfer00.clearFileList();
        	this.FileUpTransfer00.clearPostDataList();
        	this.ds_fileinfo.clearData();
        	this._vFiles = [];
        };


        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	this.ds_fileinfo.setColumn(this._vFiles_idx, "LOADED", (e.loaded / e.total)*100);
        	this.txt_result.set_value(this.txt_result.value +"\nFileUpTransfer00_onprogress");
        };


        /***********************************************************************
        * 02 : 화면 함수 선언부 선언부
        ***********************************************************************/

        this._vFiles = [];

        this.FileDialog_VirtualFile_onsuccess = function(obj, e)
        {
        	var size_table = ["KB", "MB", "GB", "TB", "PB"];

        	function cutFileSize(filesize, rate, count)
        	{
        		var ret = (filesize / (Math.pow(rate, count + 1))).toFixed(2);
        		if (ret < rate)
        		{
        			if (size_table[count])
        			{
        				return ret + " " + size_table[count];
        			}
        			else
        			{
        				return filesize + " Byte";
        			}
        		}
        		else
        		{
        			return cutFileSize(filesize, rate, ++count);
        		}
        	};

        	if (e.reason == 9)
        	{
        		var idx = this.ds_fileinfo.addRow();

        		this.ds_fileinfo.setColumn(idx, "fileid", this.Edit00.value);
        		this.ds_fileinfo.setColumn(idx, "filename", obj.filename);
        		this.ds_fileinfo.setColumn(idx, "filesize", cutFileSize(e.filesize, Math.pow(2, 10), 0));
        	}
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	for (var i = 0, len = e.virtualfiles.length, vFile; i < len; i++)
        	{
        		vFile = e.virtualfiles[i];
        		vFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
        		vFile.open(null, 1);
        		vFile.getFileSize();

        		this._vFiles.push(vFile);
        	}
        };

        //LISTVIEW 파일 드롭다운
        this.ListView00_ondrop = function(obj,e)
        {
        	if (e.datatype != "file")
        		return;

        	for (var i = 0, len = e.filelist.length, vFile; i < len; i++)
        	{
        		vFile = e.filelist[i];

        		vFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
        		vFile.open(null, 1);
        		vFile.getFileSize();

        		this._vFiles.push(vFile);
        	}
        };

        //파일 업로드
        this.btn_execute00_onclick = function(obj,e)
        {
        	if(this._vFiles.length == 0)
        	{
        		alert("처리할 파일이 존재하지 않습니다.");
        		return;
        	}

        	if(this.Edit00.value == "" || this.Edit00.value == undefined)
        	{
        		alert("파일 ID를 입력하시오.");
        		this.Edit00.setFocus();
        		return;
        	}

        	for (var i = 0, len = this._vFiles.length, vFile; i < len; i++)
        	{
        		vFile = this._vFiles[i];
        		this.txt_result.set_value(this.txt_result.value + "\nFileUpTransfer00_existFile : " + this.FileUpTransfer00.existFile(vFile));
        	}

        	this.FileUpTransfer00.upload("svcurl::uploadFiles.do");
        };

        //파일 선택
        this.btn_execute01_onclick = function(obj,e)
        {
        	this.FileDialog00.open("FileUPload Dialog", 3);
        };


        //파일 추가
        this.btn_execute03_onclick = function(obj,e)
        {
        	if(this._vFiles.length == 0)
        	{
        		alert("업로드 할 파일을 선택 하십시오.");
        		return;
        	}

        	for (var i = 0, len = this._vFiles.length, vFile; i < len; i++)
        	{
        		var vfile = this._vFiles[i];

        		if (vfile)
        		{
        			af_result = this.FileUpTransfer00.addFile(this.Edit00.value+"["+i+"]",vfile);
        			if(af_result > -1)
        			{
        				this.txt_result.set_value(this.txt_result.value + "\naddFile Success");
        			}
        			else
        			{
        				this.txt_result.set_value(this.txt_result.value + "\naddFile Fail");
        			}
        		}
        	}
        };

        //파일 삭제
        this.btn_execute02_onclick = function(obj,e)
        {
        	if(this.FileUpTransfer00.filelist.length == 0)
        	{
        		alert("처리 할 파일이 존재하지 않습니다.");
        		return;
        	}

        	if(this.Edit01.value == "" || this.Edit01.value == undefined)
        	{
        		alert("파일 ID를 입력하시오.");
        		this.Edit01.setFocus();
        		return;
        	}

        	for (var i = 0, len = this.FileUpTransfer00.filelist.length, vFile; i < len; i++)
        	{
        		rf_result = this.FileUpTransfer00.removeFile(this.Edit01.value+"["+i+"]");

        		if(rf_result > -1)
        		{
        			this.txt_result.set_value(this.txt_result.value + "\nremoveFile Success");
        		}
        		else
        		{
        			this.txt_result.set_value(this.txt_result.value + "\nremoveFile Fail");
        		}
        	}

        };

        //파일 다운로드
        this.grd_filelist_oncelldblclick = function(obj,e)
        {
        	//파일명 더블클릭 시 파일 다운로드
        	if(obj.getCellPos() == 1)
        	{
        		//FileUploadCommand.java 의 setFileName 과 매핑 됨.
        		this.FileDownTransfer00.setPostData("fileName", this.ds_uploadfile.getColumn(e.row,"filename"));
        		this.FileDownTransfer00.download("svcurl::downloadFile.do");
        	}
        };

        //파일 삭제(단건_
        this.grd_filelist_oncellclick = function(obj,e)
        {
        	//삭제 컬럼 클릭
        	if(obj.getCellPos() == 3)
        	{
        		if( !confirm(this.ds_uploadfile.getColumn(e.row,"filename")+" 파일을 삭제하시겠습니까?")) return;

        		//단건 처리.
        		this.ds_deleteFile.clearData();
        		var row = this.ds_deleteFile.addRow();
        		//FileUploadCommand.java 의 setFileName 과 매핑 됨.
        		this.ds_deleteFile.setColumn(row, "filename", this.ds_uploadfile.getColumn(e.row,"filename"));

        		var strSvcId    = "deletefile";
        		var strSvcUrl   = "deleteFiles.do";
        		var inData      = "input=ds_deleteFile";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= true;

        		this.gfnTransaction(strSvcId ,strSvcUrl ,inData ,outData ,strArg,callBackFnc,isAsync);
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "deletefile":
        			this.ds_uploadfile.deleteRow(this.ds_uploadfile.rowposition);
        			alert("파일 삭제 완료");
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_execute01.addEventHandler("onclick",this.btn_execute01_onclick,this);
            this.btn_execute00.addEventHandler("onclick",this.btn_execute00_onclick,this);
            this.ListView00.addEventHandler("oncellclick",this.ListView00_oncellclick,this);
            this.ListView00.addEventHandler("ondrop",this.ListView00_ondrop,this);
            this.btn_execute02.addEventHandler("onclick",this.btn_execute02_onclick,this);
            this.btn_execute03.addEventHandler("onclick",this.btn_execute03_onclick,this);
            this.grd_filelist.addEventHandler("oncelldblclick",this.grd_filelist_oncelldblclick,this);
            this.grd_filelist.addEventHandler("oncellclick",this.grd_filelist_oncellclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
        };
        this.loadIncludeScript("pattern03-FileUpTransfer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
