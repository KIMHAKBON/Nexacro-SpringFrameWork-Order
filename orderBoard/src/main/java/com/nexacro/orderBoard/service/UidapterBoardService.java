package com.nexacro.orderBoard.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.nexacro.orderBoard.object.Board;

/**
 * <pre>
 * 
 * @title
 * @desc 아래의 예제는 샘플용으로 작성된 코드로 참고용으로만 사용하시기 바랍니다. -
 * @package com.nexacro.orderBoard.service
 * 
 *          <pre>
 * 
 * @author TOBESOFT
 * @since 2017. 11. 20.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2017. 11. 20. TOBESOFT
 *      최초작성
 */
public interface UidapterBoardService {
	
	void deleteOrdList(Map<String, Object> ds_delList);
	
	void updateOrdList(Map<String, Object> ds_regOrd);
	
	void insertOrdList(Map<String, Object> ds_regOrd);
	
	ArrayList<Map<String,Object>> selectItemList();
	
	ArrayList<Map<String,Object>> selectOrdList(Map<String, Object> ds_searchList);
	
	ArrayList<Map<String,Object>> selectCommonCode(Map<String, Object> ds_search);

	
	
	
	
	
	
	
	
	List<Map<String, Object>> retrieve_datalist_map(Map<String, String> board);

	List<Board> retrieve_datalist(Board board);

	void update_datalist(List<Board> boardList);

	void update_datalist_map(List<Map<String, Object>> boardList);
	
	int selectUserCount();
}