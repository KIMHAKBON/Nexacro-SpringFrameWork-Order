(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample001_transaction");
            this.set_titletext("기본샘플(조회,입력,저장,삭제)");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,818);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"POST_ID\" type=\"int\" size=\"4\"/><Column id=\"HIT_COUNT\" type=\"int\" size=\"4\"/><Column id=\"COMMUNITY_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_DATE\" type=\"datetime\" size=\"17\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"CONTENTS\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"title\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsA", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsB", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsC", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"key\">key01</Col><Col id=\"value\">aaa</Col></Row><Row><Col id=\"key\">key02</Col><Col id=\"value\">bbb</Col></Row><Row><Col id=\"key\">key03</Col><Col id=\"value\">ccc</Col></Row><Row><Col id=\"key\">key04</Col><Col id=\"value\">ddd</Col></Row><Row><Col id=\"key\">key05</Col><Col id=\"value\">eee</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","32",null,null,"0","3",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("no").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"570\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"글 ID\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"bind:postId\"/><Cell col=\"1\" text=\"bind:title\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:contents\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:regDate\"/><Cell col=\"4\" text=\"bind:hitCount\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"52","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"5","65",null,"203","22",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","71","5","157","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","5","5","59","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_background("url(\'theme://images/img_WF_Treeitem.png\') no-repeat left center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"5","65",null,"136","22",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_borderRadius("5px");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"5","65",null,"69","22",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_borderRadius("5px");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"5","65","25","2",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_borderRadius("5px");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtVar","283","5","157","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);
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
        this.registerScript("pattern01-transaction.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    샘플 > transaction
        *  @FileName 	Sample001_transaction.xfdl
        *  @Creator 	soojeong
        *  @CreateDate 	2017.03.09
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *  2017.10.17     	kyk       	           주석 정비
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /**
         * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
         * @return {boolean} false(화면 닫음) / true(화면 닫지 않음)
        */
        this.fnClose = function()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		return true;
        	}
        	return false;
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
        		case "search":
        			trace(this.dsList.saveXML());
        			break;

        		case "save":
        			// 저장 되었습니다.
        			this.gfnAlert("msg.save.success");
        			break;
        	}
        };

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearch = function ()
        {
        	// 조회조건 설정
         	this.dsSearch.setColumn(0, "title"  , this.divSearch.form.edtTitle.value);

         	var strSvcId    = "search";
        	var strSvcUrl   = "retrieve_datalist2.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=output1";
        	var strArg      = "a="+this.divSearch.form.edtVar.value;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
         * @description 입력
        */
        this.fnAdd = function()
        {
        	this.dsList.addRow();
        };

        /**
         * @description 삭제
        */
        this.fnDel = function()
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        /**
         * @description 저장
        */
        this.fnSave = function()
        {
        	// 변경사항 체크
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 변경된 내역이 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	var strSvcUrl   = "update_datalist_map.do";
        	var inData      = "input1=dsList:U";
        	var outData     = "";

        	this.gfnTransaction("save", strSvcUrl, inData, outData);
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnSearch,this);
            this.divSearch.form.btnAdd.addEventHandler("onclick",this.fnAdd,this);
            this.divSearch.form.btnDel.addEventHandler("onclick",this.fnDel,this);
            this.divSearch.form.btnSave.addEventHandler("onclick",this.fnSave,this);
        };
        this.loadIncludeScript("pattern01-transaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
