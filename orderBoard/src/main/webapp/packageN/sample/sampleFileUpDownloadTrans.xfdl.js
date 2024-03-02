(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpDown");
            this.set_titletext("New Form");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputparam", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"key\">key01</Col><Col id=\"value\">aaa</Col></Row><Row><Col id=\"key\">key02</Col><Col id=\"value\">bbb</Col></Row><Row><Col id=\"key\">key03</Col><Col id=\"value\">ccc</Col></Row><Row><Col id=\"key\">key04</Col><Col id=\"value\">ddd</Col></Row><Row><Col id=\"key\">key05</Col><Col id=\"value\">eee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta03","20","60",null,"126","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("cornsilk");
            obj.set_verticalAlign("top");
            obj.set_textAlign("left");
            obj.set_font("bold 18px/normal \"맑은 고딕\"");
            obj.set_padding("10px");
            obj.set_text("nexacroN 기본 파일 Transper up/down 컴포넌트로 제작되었습니다.");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"251","69","30","93",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileUpload","20","287",null,"183","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_PATH\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"251","69","30","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전송");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileDownload","20","540",null,null,"20","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"116\"/><Column size=\"353\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_PATH\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_PATH\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"504","106","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택 다운로드");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"504","106","30","132",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("리스트 불러오기");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic03");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"251","69","30","167",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","20","17","241","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("File UPLOAD/DOWNLOAD ");
            this.addChild(obj.name, obj);

            obj = new Static("staSupportDnd","35","97","383","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("▶ drag and drop <fc v=\'red\'>지원</fc>");
            obj.set_font("bold 14px/normal \"Gulim\",\"Arial\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSupportPgb","35","125","383","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("▶ progressbar <fc v=\'blue\'>미지원</fc>");
            obj.set_font("bold 14px/normal \"Gulim\",\"Arial\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSupportMulti","35","155","383","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("▶ multiselect <fc v=\'red\'>지원</fc>");
            obj.set_font("bold 14px/normal \"Gulim\",\"Arial\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","20","186","464","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H30");
            obj.set_background("RGBA(36,19,214,0.33)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","229","178","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("1) file upload");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","25","259","424","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("H10");
            obj.set_background("RGBA(23,211,35,0.30)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","21","490","138","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2) file download");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta05_00","26","470","424","10",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("H10");
            obj.set_background("RGBA(23,211,35,0.30)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staSupportDnd00","590","97","383","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("▶ Multi Upload <fc v=\'red\'>지원</fc>");
            obj.set_font("bold 14px/normal \"Gulim\",\"Arial\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSupportDnd00_00","590","125","383","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("▶ Multi Download <fc v=\'red\'>Zip파일로 다운로드 됨</fc>");
            obj.set_font("bold 14px/normal \"Gulim\",\"Arial\"");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_postData","159","231","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("postData 포함 여부@");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_postType","320","225","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var rdo_postType_innerdataset = new nexacro.NormalDataset("rdo_postType_innerdataset", obj);
            rdo_postType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">ssv</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">json</Col></Row></Rows>");
            obj.set_innerdataset(rdo_postType_innerdataset);
            obj.set_text("ssv");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFileUpDownloadTrans.xfdl", function() {
        /**
        *  nexacro 17 demo
        *  @MenuPath    대메뉴 > 소메뉴
        *  @FileName    FileUpDown.xfdl
        *  @Creator     presales
        *  @CreateDate  2019/10/16
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        *  2019/10/16          presales                  최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /* service url : 사용경로 지정 */
        this.serverUrl = ""; // nexacro.getProjectPath();
        this.folderName = "fileSample";	//업무별 file upload 폴더

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.FileUpDown_onload = function(obj,e)
        {
        	//접속 환경별 서비스 URL 셋팅
        	var objEnv = nexacro.getEnvironment();
        	this.serverUrl =  objEnv.services["svcurl"].url; // "http://localhost:8080/uiadapter-spring-sample/"; //

        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnAddFileList : fileUpTrans객체에 파일을 추가한다.
        * @param {Array}  filelists	- 파일 리스트
        * @return : N/A
        * @example :
        */
        this.fnAddFileList = function(filelists)
        {
        	//array type virtualfile List
        	var vFile, strId;
        	var len = filelists.length;
        	for (var i = 0; i < len; i++)
        	{
        		strId = this.guid();
        		vFile = filelists[i];
        		this.fileUpTrans.addFile(strId, vFile);

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        		vFile.getFileSize();	//return file size
        		vFile.close();
        	}
        }
        this.guid = function(){
        	return Date.now().toString(36) + Math.random().toString(36).substring(2);
        }

        /**
        * fnUploadFile : 파일 업로드
        * @return : N/A
        * @example :
        */
        this.fnUploadFile = function()
        {
        	this.setUploadInfo(this.ds_inputparam);

        	var uploadUrl = this.serverUrl+"advancedUploadFiles.do?subFolder=" + this.folderName;
        	this.fileUpTrans.upload(uploadUrl);
        }

        /*
         * @infoDs : 파일업로드시 전달할 Dataset
         */
        this.setUploadInfo = function(infoDs)
        {
        	this.fileUpTrans.clearPostDataList();
        	if ( true == this.chk_postData.value )
        	{
        		if(infoDs != null) {
        			for (var i = 0; i < infoDs.rowcount; i++)
        			{
        				this.fileUpTrans.setPostData(
        					infoDs.getColumn(i,"key"),
        					infoDs.getColumn(i,"value")
        				);
        				trace( infoDs.getColumn(i,"key") + " : " + this.fileUpTrans.getPostData(infoDs.getColumn(i,"key")) );
        			}
        		}
        		// SSV prefix + SSV 포맷 dataset을 전송.
        		this.fileUpTrans.setPostData(
        			"inputDatasets",
        			this.rdo_postType.index == 0 ? this.getSSVData("UTF-8", "ds_input") : this.getJsonData("UTF-8", "ds_input")
        		);

        		trace("this.fileUpTrans.postdatalist:"+this.fileUpTrans.postdatalist.length);
        	} else {
        		trace(this.fileUpTrans.filelist.length);
        	}
        }

        /*
         * SSV포맷 리턴
         * SSV포맷의 dataset 값에 구분자로 사용하는 String.fromCharCode(30), String.fromCharCode(31)이 포함되면 안 됨.
         */
        this.getSSVData = function(characterSet, dsName) {

        	return this.dsUpload.saveSSV("ds_input") ;
        }

        /*
         * JSON포맷 리턴
         * JSON포맷의 dataset 값과 변수들 포함.
         */
        this.getJsonData = function(characterSet, ds, varArr) {

        	if( varArr == null )
        		return "{ \"Datasets\" : \n[\n" + this.dsUpload.saveJSON("ds_input") + "\n]\n}";
        	else
        		return "TODO :: varArr 추가하는 패킷 셈플 미작성";
        }
        /**
        * fnDownloadFile : 파일 다운로드
        * @return : N/A
        * @example :
        */
        this.fnDownloadFile = function(i)
        {
        	this.fileDownTrans.clearPostDataList();

        	this.fileDownTrans.set_downloadfilename(this.dsDownload.getColumn(i, "FILE_NAME"));	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filepath",
        		this.dsDownload.getColumn(i, "FILE_URL")
        	);
        	this.fileDownTrans.setPostData(
        		"filename",
        		this.dsDownload.getColumn(i, "FILE_NAME")
        	);
        	this.fileDownTrans.setPostData(
        		"subFolder",
        		"fileSample"
        	);
        	var queryStr = "&file="+this.dsDownload.getColumn(i, "FILE_NAME");
        	var downloadUrl = this.serverUrl+"advancedDownloadFile.do?subFolder=" + this.folderName + queryStr;
        	this.fileDownTrans.download(downloadUrl);
        }


        /**
        * fnDownloadFileAll : 파일 전체 다운로드
        * @return : N/A
        * @example :
        */
        this.fnDownloadFileAll = function()
        {
        	this.fileDownTrans.clearPostDataList();

        	var arrNameList = new Array();

        	for(var i=0; i < this.dsDownload.getRowCount(); i++)
        	{
        		if(this.dsDownload.getColumn(i, "CHK") == 1)
        			arrNameList.push(this.dsDownload.getColumn(i, "FILE_NAME"));
        	}

        	this.fileDownTrans.set_downloadfilename("fileSample.zip");	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	this.fileDownTrans.download(this.serverUrl+"multiDownloadFiles.do?subFolder=" + this.folderName);
        }

        /**
        * fnGetFileSize : 파일 크기에 맞는 파일 사이즈를 표시한다.
        * @param {String}  filesize	- 파일사이즈
        * @return : N/A
        * @example :
        * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        */
        this.fnGetFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /**
        * fnCallbackTransaction :
        * @param {String}  svcId	- 서비스 ID
        * @param {String}  errCode	- 에러코드
        * @param {String}  errMsg	- 에러메세지
        * @return : N/A
        * @example :
        */
        this.fnCallbackTransaction = function(svcId, errCode, errMsg)
        {
        	if(svcId == "list")
        	{
        		this.dsDownload.set_enableevent(false);

        		this.dsDownload.addColumn("CHK", "STRING", 255);

        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i, "CHK", 0);
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.fnGetFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}

        		this.dsDownload.set_enableevent(true);
        	}
        };


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * @description 파일 추가
        */
        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };


        /**
         * @description 파일 삭제
        */
        this.btnDel_onclick = function(obj,e)
        {
        	//selected file delete
        	var chk = this.grdFileUpload.getCellPropertyValue(0, 0, "text");
        	var length = this.dsUpload.rowcount;

        	if(chk == 1)
        	{
        		//전체삭제
        		for(var i=0; i<length; i++)
        		{
        			this.dsUpload.deleteRow((this.dsUpload.rowcount-1));

        			var objFileList = this.fileUpTrans.filelist[(this.dsUpload.rowcount-1)];		//selected file search
        			this.fileUpTrans.removeFile(objFileList);			//filelist remove
        		}
        	}
        	else
        	{
        		//단건삭제
        		var nRow = this.dsUpload.rowposition;
        		this.dsUpload.deleteRow(nRow);

        		var objFileList = this.fileUpTrans.filelist[nRow];	//selected file search
        		this.fileUpTrans.removeFile(objFileList);			//filelist remove
        	}
        };


        /**
         * @description 파일 전송
        */
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.setWaitCursor(true);
        	this.fnUploadFile();
        };

        /**
         * @description 리스트 불러오기
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	var sUrl = this.serverUrl+"advancedDownloadList.do?subFolder=" + this.folderName;
        	this.transaction("list", sUrl, "", "dsDownload=dsList", "", "fnCallbackTransaction", "false", "0")
        };


        /**
         * @description 전체 다운로드
        */
        this.btnDonwload_onclick = function(obj,e)
        {
        	if(this.dsDownload.getCaseCount("CHK == '1'") < 1)
        	{
        		alert("반드시 항목 1개를 선택해야 합니다.");
        	}
        	else
        	{
        		if(this.dsDownload.getCaseCount("CHK == '1'") > 1)
        		{
        			this.fnDownloadFileAll();
        		}
        		else
        		{
        			var nRow = this.dsDownload.filterRow("CHK", 1);
        			this.fnDownloadFile(nRow);
        		}
        	}
        };

        /**
         * @description 파일업로드 그리드 셀 더블클릭 이벤트
        */
        this.grdFileUpload_oncelldblclick = function(obj,e)
        {

        };

        /**
         * @description 파일업로드 그리드 마우스 드랍 이벤트
        */
        this.grdFileUpload_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.fnAddFileList(e.filelist);
        	}
        };


        /**
         * @description 파일업로드 전체선택 이벤트
        */
        this.grdFileUpload_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };


        /**
         * @description 파일다운로드 닫았을 때 이벤트
        */
        this.fileDialog_onclose = function(obj,e)
        {
        	this.fnAddFileList(e.virtualfiles);
        	//this.grdFileUpload.setFocus();
        };

        /**
         * @description 파일추가 성공
        */
        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9)
        	{
        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.fnGetFileSize(e.filesize));
        		this.dsUpload.setColumn(nRowIdx, "FILE_URL", obj.fullpath);
        	}
        }

        /**
         * @description 파일추가 실패
        */
        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        /**
         * @description 업로드 성공
        */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);
        	var objCallDs = e.datasets[0];

        	for(var i=0; i<objCallDs.getRowCount(); i++)
        	{
        		this.dsUpload.setColumn(i, "FILE_URL",objCallDs.getColumn(i,"savePath"));
        	}

        	alert("전송완료");
        };


        /**
         * @description 업로드 실패
        */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	alert(e.errortype + ">>" + e.errormsg);
        };


        /**
         * @description 다운로드 그리드 전체체크
        */
        this.grdFileDownload_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        /**
         * @description 다운로드 그리드 파일 다운로드
        */
        this.grdFileDownload_oncelldblclick = function(obj,e)
        {
        	this.fnDownloadFile(e.row);
        };

        /**
         * @description 다운로드 성공
        */
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        /**
         * @description 다운로드 실패
        */
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FileUpDown_onload,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdFileUpload.addEventHandler("oncelldblclick",this.grdFileUpload_oncelldblclick,this);
            this.grdFileUpload.addEventHandler("ondrop",this.grdFileUpload_ondrop,this);
            this.grdFileUpload.addEventHandler("onheadclick",this.grdFileUpload_onheadclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdFileDownload.addEventHandler("oncelldblclick",this.grdFileDownload_oncelldblclick,this);
            this.grdFileDownload.addEventHandler("onheadclick",this.grdFileDownload_onheadclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };
        this.loadIncludeScript("sampleFileUpDownloadTrans.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
