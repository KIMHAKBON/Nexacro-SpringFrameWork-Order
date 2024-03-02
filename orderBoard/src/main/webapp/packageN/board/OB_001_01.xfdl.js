(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(430,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCustGb", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGbCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_02","54","25","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_custNm","185","26","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_00","47","180","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_addr","184","181","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_01","52","75","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("휴대폰번호");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_phone","184","76","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_02","47","127","119","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("생년월일(사업자번호)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_birBizNo","184","128","205","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","48","298","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주문 상품");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","184","295","147","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","48","238","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("고객 구분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGbNm","184","235","147","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_custGbCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","77","360","138","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주문등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","234","359","138","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",430,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	//alert("onload 함수 실행");

        	//주문 등록을 위한 주문상태, 주문상품 콤보박스 초기화

        	//01. 고객구분 콤보박스에 출력한 데이터들을 TB_CD_MST 테이블로부터 조회해오자.
        	//이 로직은 앞서 OB_001.xfdl onload에서 만든 경험이 있습니다. 이미 만들어온 로직 그대로 쓰면됩니다.
        	this.fn_setCustGbCbo();

        	//2. 주문상품 리스트를 TB_ITEM 테이블로부터 조회하여 콤보박스 안의 데이터를 채워주자.
        	//방법은 위 TB_CD_MST 테이블을 조회해오는 방식과 유사하다.
        	this.fn_setItemCbo();
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	//alert("주문 등록 버튼 클릭");
        	//1. 주문등록을 위해 임력받은 6개의 값을 데이터셋에 담아 서버로 전송해야 한다.
        	// 따라서, 데이터셋을 만들고 사용자가 입력한 6개의 값을 담아주자.
        	this.ds_regOrd.clearData();
        	this.ds_regOrd.addRow();
        	this.ds_regOrd.setColumn(0, "CUST_NM", this.edit_custNm.value);
        	this.ds_regOrd.setColumn(0, "PHONE", this.edit_phone.value);
        	this.ds_regOrd.setColumn(0, "BIR_BIZ_NO", this.edit_birBizNo.value);
        	this.ds_regOrd.setColumn(0, "ADDR", this.edit_addr.value);
        	this.ds_regOrd.setColumn(0, "CUST_GBCD", this.cbo_custGbNm.value);
        	this.ds_regOrd.setColumn(0, "ITEM_CD", this.cbo_itemNm.value);

        	trace(this.ds_regOrd.getColumn(0, "CUST_NM"));
        	trace(this.ds_regOrd.getColumn(0, "PHONE"));
        	trace(this.ds_regOrd.getColumn(0, "BIR_BIZ_NO"));
        	trace(this.ds_regOrd.getColumn(0, "ADDR"));
        	trace(this.ds_regOrd.getColumn(0, "CUST_GBCD"));
        	trace(this.ds_regOrd.getColumn(0, "ITEM_CD"));


        	//2. 세팅한 ds_regOrd 데이터셋을 서버로 전송해서 주문등록을 해보자.
        	var strSvcId = "insertOrdList";
        	var strSVcUrl = "insertOrdList.do";
        	var inData = "ds_regOrd=ds_regOrd";
        	var outData = "";						//서버로부터 받을 값은 따로 없다.
        	var strAvg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(
        							strSvcId
        							,strSVcUrl
        							,inData
        							,outData
        							,strAvg
        							,callBackFnc
        						);
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	//alert("닫기 버튼 클릭");
        	this.close();
        };

        /******************************************************************************************************************************************
        *사용자 정의 함수
        ******************************************************************************************************************************************/

        this.fn_setCustGbCbo = function(){


        	//ds_searchCustGb 데이터셋을 생성하고 서버로 전달할 인자값을 추가해보자.
        	this.ds_searchCustGb.clearData(); 	//데이터셋을 초기화
        	this.ds_searchCustGb.addRow();		//데이터셋에 값을 세팅하기 위해 1줄의 Row룰 추가한 것이다.
        	this.ds_searchCustGb.setColumn(0, "CD_VAL", "002"); 		//추가된 0번째 Row의 CD_VAL 칼럼에 001이라는 값을 추가한 겁니다.

        	//서버로 데이터를 전송한다.
        	//서버로 데이터를 전송하기 전 필요한 값들을 세팅한다.
        	var strSvcId = "selectCommonCode";				//넥사크로에서 트랜잭션을 구분하기 위한 id값, 이 값은 차후 fncallback 함수에서 쓰인다.
        	var strSVcUrl = "selectCommonCode.do";			//Java Controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData = "ds_search=ds_searchCustGb";		//서버로 전송할 데이터셋을 세팅 = 문자 기준으로 왼쪽이 서버, 오른쪽이 프론트 데이터셋이다.
        													//서버측(.java)에도 = 문자 기준 왼쪽 데이터셋명(ds_search)과 반드시 동일하여 명명해야 한다.
        	var outData = "ds_custGbCombo=ds_commonCode";	//서버로부터 전달받을 데이터셋을 세팅하는 것이다.
        													//inData와는 반대로 = 문자 기준으로 왼쪽이 프론트, 오른쪽이 서버 데이터셋이다.
        													//서버측(.java)에서도 = 문자 기준 오른쪽 데이터셋(ds_commonCode)과 반드시 동일한 이름을 써야한다.
        	var strAvg = "";								//데이터셋이 아닌 값을 보낼때 쓰는 필드지만 데이터셋을 쓰는 것으로 통일하자.
        	var callBackFnc = "fnCallback";					//프레임웍 사이클에 9번에 해당한다. 서버로부터 값을 받은 이후 이행해야할 작업코드
        													//fnCallback 함수에서 작성한다.
        	this.gfnTransaction(
        							strSvcId
        							,strSVcUrl
        							,inData
        							,outData
        							,strAvg
        							,callBackFnc
        						);
        };

        this.fn_setItemCbo = function(){


        	var strSvcId = "selectItemList";
        	var strSVcUrl = "selectItemList.do";
        	var inData = "";									//따로 서버로 전송할 데이터가 없음.
        	var outData = "ds_itemCombo=ds_itemCombo";
        	var strAvg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(
        							strSvcId
        							,strSVcUrl
        							,inData
        							,outData
        							,strAvg
        							,callBackFnc
        						);
        };

        /******************************************************************************************************************************************
        * CallBack Function(서버수신 후 후처리 영역)
        ******************************************************************************************************************************************/
        //fnCallback 함수는 임의로 정해주는 것이 아니라 gfnTransaction 함수와 일맥상통하는 기능이다!!! 연계된 기능이라고 보면된다!!!
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	switch(svcID){
        		case "selectCommonCode" :
        				trace("고객구분 콤보박스 세팅 완료");
        				break;
        		case "selectItemList" :
        				trace("주문상품 콤보박스 세팅 완료");
        				break;
        		case "insertOrdList" :
        				alert("주문 등록 완료");
        				this.close();
        				break;
        	}
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
