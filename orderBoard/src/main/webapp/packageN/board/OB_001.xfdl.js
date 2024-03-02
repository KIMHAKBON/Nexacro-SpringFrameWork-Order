(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001");
            this.set_titletext("주문게시판");
            this.set_font("bold 14px/normal \"Gulim\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","180","1","1099","106",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","180","107",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_font("bold 16px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_background("ivory");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","10","110","115","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주문등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_ordNo","290","6","145","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","202","9","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주문번호");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_cmpYn","610","-2","105","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","491","6","99","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인고객여부");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStat","607","52","147","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","501","60","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주문상태");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_custGb","880","6","240","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_custGb_innerdataset = new nexacro.NormalDataset("rdo_custGb_innerdataset", obj);
            rdo_custGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">법인</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">임직원</Col></Row></Rows>");
            obj.set_innerdataset(rdo_custGb_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","781","4","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("고객구분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ordList","14","151","1076","569",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"73\"/><Column size=\"74\"/><Column size=\"108\"/><Column size=\"70\"/><Column size=\"108\"/><Column size=\"168\"/><Column size=\"123\"/><Column size=\"220\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"고객구분\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"주문일시\"/></Band><Band id=\"body\"><Cell text=\"bind:ORD_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ORD_STAT_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CUST_NO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CUST_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CUST_GBCD_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PHONE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ADDR\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:ITEM_NM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:REG_DT\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02","202","59","79","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_custNm","289","60","145","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delOrd","260","110","115","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updOrd","135","110","115","33",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주문수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectOrd","1143","13","117","81",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조 회");
            obj.set_background("blue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,730,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001.xfdl", function() {


        this.OB_001_onload = function(obj,e)
        {
        	//alert("onload 함수 실행");

        	//검색 조건의 주문상태 콤보박스 초기화
        	//OB_001.xfml 이 화면이 로드될 때 검색 조건에 주문박스 콤보박스를 초기화 시켜줄겁니다.
        	//서버에 요청을 하기전에 전달해줘야할 인자값은 뭐가 있을지 생각을 해봐야 합니다.
        	//주문 상태값만을 불러오기 위해선 TB_CD_MST 테이블 WHERE절에 CD_VAL = '001' 이라는 조건을 걸어줘야한다.
        	//따라서 DATASET에 001이라는 값을 넣어 서버에 전달해보자.
        	//넥사크로 데이터넷 = 자바의 List<Map>
        	//Map은 key : value로 여러개 값을 담아들 수 있는 것이다.

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

        this.btn_selectOrd_onclick = function(obj,e)
        {
        	//alert("주문 리스트 조회");
        	// 1. 조회 버튼을 클릭했을때, 우리는 DB에서 조회하여 값을 그리드에 뿌려지게 된다.
        	//그렇다면 프론트에서 우리는 어떤 값들을 만들어서 서버로 보내줘야할까?
        	//바로 검색조건에 있는 값들을 담아서 서버로 보내줘야한다.
        	//이 값들을 주문 리스트 조회 시 where절에 넣어줘야 알맞은 데이터를 가져올 수 있습니다.
        	//따라서, 검색 조건들을 ds_searchList라는 데이터셋을 만들어서 값을 세팅해주는 작업을 해봅시다.
        	this.ds_searchList.clearData();
        	this.ds_searchList.addRow();
        	this.ds_searchList.setColumn(0, "ORD_NO", this.edit_ordNo.value);
        	this.ds_searchList.setColumn(0, "CUST_NM", this.edit_custNm.value);
        	this.ds_searchList.setColumn(0, "COMP_YN", this.chk_cmpYn.value);
        	this.ds_searchList.setColumn(0, "ORD_STAT_CD", this.cbo_ordStat.value);
        	this.ds_searchList.setColumn(0, "CUST_GBCD", this.rdo_custGb.value);

        	trace("로그 남기기(크롬의 console.log 기능과 같다.");
        	trace("ORD_NO			:" + this.ds_searchList.getColumn(0, "ORD_NO"));
        	trace("CUST_NM			:" + this.ds_searchList.getColumn(0, "CUST_NM"));
        	trace("COMP_YN			:" + this.ds_searchList.getColumn(0, "COMP_YN"));
        	trace("ORD_STAT_CD		:" + this.ds_searchList.getColumn(0, "ORD_STAT_CD"));
        	trace("CUST_GBCD		:" + this.ds_searchList.getColumn(0, "CUST_GBCD"));

        	//2. 우리는 서버에서 가져온 주문리스트를 그리드에 보여줘야한다.
        	//앞서 우리는 그리드에 뼈대만 만들어뒀다. ds_list라는 데이터셋을 만들어 바인딩함으로써
        	//그리드가 서버로부터 가져오는 ds_list값을 유기적으로 보여주도록 만들어 줄 것입니다.

        	//3. this.gfnTransaction 함수를 사용하여 서버로 데이터를 전송하고 받아 보겠습니다.
        	var strSvcId = "selectOrdList";
        	var strSVcUrl = "selectOrdList.do";
        	var inData = "ds_searchList=ds_searchList";			//ds_searchList 데이터셋을 서버에서 ds_searchList로 데이터를 받아주겠다.
        	var outData = "ds_list=ds_list";					//서버에서 ds_list를 프론트에 있는 ds_list 데이터셋으로 데이터를 넘겨주겠다.
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

        this.btn_regOrd_onclick = function(obj,e)
        {
        	//alert("주문 등록 팝업 오픈");

        	var oArg = {};												//팝업창을 열때 부모창에서 가져갈 데이터가 있다면 이 변수에 데이터를 세팅해준다.
        																//주문등록시에는 가져갈 데이터가 없으므로, 공란으로 지정하겠습니다.
        	var oOption = {}; 											//팝업을 어느 위치에 위치시킬건지 프로퍼티를 세팅해주는 것이다.
        																//ex) top = 20, left = 30 / top,left를 지정하지 않으면 자동으로 가운데 정렬해줍니다.
        	var sPopupCallBack = "fnPopupCallback";						//팝업창을 닫을때 후처리 로직을 작성하기 위한 함수를 지정한다.
        	this.gfnOpenPopup(
        						"popup"									//팝업을 구분하기 위한 id값
        						,"board::OB_001_01.xfdl" 				//경로 -> 해당 루트가 되는 폴더 :: 파일
        						,oArg									//부모창에서 자식창으로 값을 들고갈 수 있게 하는 인자
        						,sPopupCallBack
        						,oOption
        					 );

        	//gfnOpenPopup과 같은 공통함수는 exPrototype 폴더내에 있다.

        };

        this.btn_updOrd_onclick = function(obj,e)
        {
        	//alert("주문 수정 팝업 오픈");

        	var ordNo = this.ds_list.getColumn(this.ds_list.rowposition, "ORD_NO");
        	var oArg = {ordNo:ordNo}; //전달받을 변수 : 전달할 변수
        	var oOption = {};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(
        						"popup"
        						,"board::OB_001_02.xfdl"
        						,oArg
        						,sPopupCallBack
        						,oOption
        					 );
        };

        this.btn_delOrd_onclick = function(obj,e)
        {
        	//alert("주문 삭제 진행");

        	var ordNo = this.ds_list.getColumn(this.ds_list.rowposition, "ORD_NO");
        	//alert(ordNo);

        	//서버로 전소앟기 위한 데이터셋 세팅
        	this.ds_delList.clearData();
        	this.ds_delList.addRow();
        	this.ds_delList.setColumn(0, "ORD_NO", ordNo);

        	//서버로 deleteOrdList.do 라는 URL 요청에 ds_delList값을 담아 전송해보겠습니다.
        	var strSvcId = "deleteOrdList";
        	var strSVcUrl = "deleteOrdList.do";
        	var inData = "ds_delList=ds_delList";
        	var outData = ""; // 서버로부터 받을 값은 따로 없으니 생략하겠습니다.
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

        this.grd_ordList_oncelldblclick = function(obj,e)
        {
        	//그리드 더블클릭 시 실행
        };

        this.chk_cmpYn_onchanged = function(obj,e)
        {
        	alert("onchanged 함수 실행");
        };

        this.cbo_ordStat_onitemchanged = function(obj,e)
        {

        };

        /*********************************************************************************************************

        *CallBack Function(서버 수신 후 후처리 영역)

        *********************************************************************************************************/

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//에러가 발생했을때 errorCode는 음수를 반환한다.
        	if (errorCode < 0)
        	{
        		alert("작업 실패 코드" + errorCode + "\n" + errorMsg);
        		return 0; //return 0를 하지 않으면 삭제가 되지 않았는데도 "삭제 완료"가 나오게 된다.
        	};

        	switch(svcID)
        	{
        		case "selectCommonCode" :
        			this.ds_ordStatCombo.insertRow(0);	//0번째 Row에 라인 삽입
        			this.ds_ordStatCombo.setColumn(0, "CD_VAL1", "");
        			this.ds_ordStatCombo.setColumn(0, "CD_NM1", "전체");
        			break;
        		case "deleteOrdList" :
        			alert("삭제 완료");
        			break;
        	};
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_onload,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.chk_cmpYn.addEventHandler("onchanged",this.chk_cmpYn_onchanged,this);
            this.cbo_ordStat.addEventHandler("onitemchanged",this.cbo_ordStat_onitemchanged,this);
            this.grd_ordList.addEventHandler("oncelldblclick",this.grd_ordList_oncelldblclick,this);
            this.btn_delOrd.addEventHandler("onclick",this.btn_delOrd_onclick,this);
            this.btn_updOrd.addEventHandler("onclick",this.btn_updOrd_onclick,this);
            this.btn_selectOrd.addEventHandler("onclick",this.btn_selectOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
