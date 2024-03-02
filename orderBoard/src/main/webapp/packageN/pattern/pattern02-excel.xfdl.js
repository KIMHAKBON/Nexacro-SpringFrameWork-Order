(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample003_excel");
            this.set_titletext("엑셀 import/export");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"5","83",null,"179","5",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnExcelEx",null,"5","83",null,"92","5",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("다운로드 엑셀");
            obj.set_borderRadius("5px");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnExcelImport",null,"5","83",null,"5","5",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("업로드 엑셀");
            obj.set_borderRadius("5px");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","32",null,null,"0","3",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("no").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"570\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"글 ID\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"bind:POSTID\"/><Cell col=\"1\" text=\"bind:TITLE\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:CONTENTS\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:REGDATE\"/><Cell col=\"4\" text=\"bind:HITCOUNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pattern02-excel.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName 		utilExcel.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.01.24
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2017.01.23     	soojeong 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_onload = function(obj,e)
        {
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
        * fnSearch : 조회
        * @return : N/A
        * @example :
        */
        this.fnSearch = function ()
         {
         	var strSvcId    = "search";
        	var strSvcUrl   = "retrieve_datalist_map.do";
        	var inData      = "";
        	var outData     = "dsList=output1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	//생략가능
        	var isAsync   = true;
        	var nDataType = 0;

        	this.gfnTransaction( strSvcId , strSvcUrl , inData , outData , strArg, callBackFnc, nDataType);
         };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	switch(svcID)
        	{
        		case "search":
         			//trace(this.dsList.saveXML());
        			break;
        	}
        };
        this.fnImportCallback = function(importId)
        {
        	trace(this.dsList.saveXML());
        };
         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
         /**
        * divSearch_btnSearch_onclick : 조회버튼이벤트
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };
         /**
        * btnExcelEx_onclick : 엑셀 익스포트 버튼이벤트
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnExcelEx_onclick = function(obj,e)
        {
        	/**
        	* gfnExcelExport : excel export
        	* @param  : obj		   - [object]Grid Object
        	* @param  : sSheetName - [string]sheet name[생략가능] sheet명 30자까지가능, *?등 특수문자 불가
        	* @param  : sFileName  - [string]file name[생략가능]
        	* @return : N/A
        	* @example : this.gfnExcelExport(this.grid_export, "SheetName","");
        	*/
        	if(this.dsList.getRowCount() == 0 )
        	{
        		alert("데이터가 존재하지 않습니다.");
        		return;
        	}

        	this.gfnExcelExport(this.grd_list, "*?*?*?*?*?*?*?","");
        };
         /**
        * btnExcelImport_onclick : 엑셀임포트 버튼이벤트
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnExcelImport_onclick = function(obj,e)
        {
        	/**
        	* gfnExcelImport : excel import
        	* @param  : sDataset	- [string] dataset
        	* @param  : sSheet 		- [string] sheet name	  [생략가능 default:Sheet1]
        	* @param  : sHead  		- [string] Head 영역지정 [필수:: from:to]
        	* @param  : sBody  		- [string] body 영역지정 [생략가능default A2]
        	* @param  : sCallback	- [string] callback 함수[callback호출시 필수]
        	* @param  : sImportId 	- [string] import id 	 [callback호출시 필수]
        	* @param  : objForm  	- [object] form object	 [callback호출시 필수]
        	* @return : N/A
        	* @example :this.gfnExcelImportAll("dsList","SheetName","A1:G1","A2","fnImportCallback","import",this);
        	*/
        	this.gfnExcelImportAll("dsList","sheet1","A1:E1","A2","fnImportCallback","import",this);
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.btnExcelEx.addEventHandler("onclick",this.btnExcelEx_onclick,this);
            this.divSearch.form.btnExcelImport.addEventHandler("onclick",this.btnExcelImport_onclick,this);
        };
        this.loadIncludeScript("pattern02-excel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
