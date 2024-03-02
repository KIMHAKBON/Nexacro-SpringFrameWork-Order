(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_02");
            this.set_titletext("주문수정팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_01","48","78","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주문 상품");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","184","76","147","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","48","28","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주문 상태");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStatNm","184","26","147","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgOrd","39","140","138","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","196","139","138","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",380,230,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_02.xfdl", function() {

        this.OB_001_02_onload = function(obj,e)
        {
        	//alert("onload 함수 실행");
        	//alert(this.getOwnerFrame().ordNo);

        	//1. 주문상태 콤보박스 초기화
        	this.fn_setOrdStatCbo();
        	//2. 주문상품 콤보박스 초기화
        	this.fn_setItemCbo();
        };

        this.btn_chgOrd_onclick = function(obj,e)
        {
        	//alert("주문 수정 버큰 클릭");
        	//1. 주문수정을 위해 입력받은 2개의 값을 데이터셋에 담아 서버에 전송해야 한다.
        	//따라서, 데이터셋을 만들고 사용자가 입력한 2개의 값과 주문번호를 담아서 서버로 전송해보자.
        	this.ds_updOrd.clearData();
        	this.ds_updOrd.addRow();
        	this.ds_updOrd.setColumn(0, "ORD_STAT_CD", this.cbo_ordStatNm.value);
        	this.ds_updOrd.setColumn(0, "ITEM_CD", this.cbo_itemNm.value);
        	this.ds_updOrd.setColumn(0, "ORD_NO", this.getOwnerFrame().ordNo);

        	trace(this.ds_updOrd.getColumn(0, "ORD_STAT_CD"));
        	trace(this.ds_updOrd.getColumn(0, "ITEM_CD"));
        	trace(this.ds_updOrd.getColumn(0, "ORD_NO"));

        	var strSvcId = "updateOrdList";
        	var strSVcUrl = "updateOrdList.do";
        	var inData = "ds_updOrd=ds_updOrd";
        	var outData = ""; //서버로부터 받을 값은 따로 없으니 따로 생략한다.
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
        	//alert("닫기 버큰 클릭");
        	this.close();
        };


        /********************************************************************************************************************************
        * 사용자 정의 함수
        ********************************************************************************************************************************/

        this.fn_setOrdStatCbo = function(){
        	//ds_SearchCombo 데이터셋을 생성하고 서버로 전달할 인자값을 추가해보자.
        	this.ds_searchCombo.clearData(); 	//데이터셋을 초기화
        	this.ds_searchCombo.addRow();		//데이터셋에 값을 세팅하기 위해 1줄의 Row룰 추가한 것이다.
        	this.ds_searchCombo.setColumn(0, "CD_VAL", "001"); 		//추가된 0번째 Row의 CD_VAL 칼럼에 001이라는 값을 추가한 겁니다.

        	//서버로 데이터를 전송한다.
        	//서버로 데이터를 전송하기 전 필요한 값들을 세팅한다.
        	var strSvcId = "selectCommonCode";				//넥사크로에서 트랜잭션을 구분하기 위한 id값, 이 값은 차후 fncallback 함수에서 쓰인다.
        	var strSVcUrl = "selectCommonCode.do";			//Java Controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData = "ds_search=ds_searchCombo";		//서버로 전송할 데이터셋을 세팅 = 문자 기준으로 왼쪽이 서버, 오른쪽이 프론트 데이터셋이다.
        													//서버측(.java)에도 = 문자 기준 왼쪽 데이터셋명(ds_search)과 반드시 동일하여 명명해야 한다.
        	var outData = "ds_ordStatCombo=ds_commonCode";	//서버로부터 전달받을 데이터셋을 세팅하는 것이다.
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

        /****************************************************************************************************************************************
        * CallBack Function(서버수신 후 후처리 영역)
        ******************************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode < 0)
        	{
        		alert("작업 실패 에러 코드" + errorCode + "\n" + errorMsg);
        		return 0;
        	};

        	switch(svcID)
        	{
        		case "selectCommonCode" :
        			this.ds_ordStatCombo.insertRow(0);	//0번째 Row에 라인 삽입
        			this.ds_ordStatCombo.setColumn(0, "CD_VAL1", "");
        			this.ds_ordStatCombo.setColumn(0, "CD_NM1", "전체");
        			break;
        		case "updateOrdList" :
        			alert("주문 수정 완료");
        			this.close();
        			break;
        	};
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_02_onload,this);
            this.btn_chgOrd.addEventHandler("onclick",this.btn_chgOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
