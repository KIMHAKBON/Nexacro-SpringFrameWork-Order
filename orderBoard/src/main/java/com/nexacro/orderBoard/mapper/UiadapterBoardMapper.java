package com.nexacro.orderBoard.mapper;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.nexacro.orderBoard.object.Board;

/**
 * <pre>
 * 
 * @title
 * @desc 아래의 예제는 샘플용으로 작성된 코드로 참고용으로만 사용하시기 바랍니다. -
 * @package com.nexacro.orderBoard.mapper
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
@Mapper
public interface UiadapterBoardMapper {
	
	public void deleteOrdList(Map<String, Object> ds_delList);
	
	public void updateOrdList(Map<String, Object> ds_regOrd);
	
	public void insertCust(Map<String, Object> ds_regOrd);
	
	public String checkCustDup(Map<String, Object> ds_regOrd);
	
	public void insertOrdList(Map<String, Object> ds_regOrd);
	
	public ArrayList<Map<String, Object>> selectItemList();
	
	public ArrayList<Map<String, Object>> selectOrdList(Map<String, Object> ds_searchList);
	
	public ArrayList<Map<String, Object>> selectCommonCode(Map<String, Object> ds_search);
	
	
	
	
	
	
	
	
	
	
	
	
	
	public List<Board> retrieve_datalist(Board board);

	public List<Map<String, Object>> retrieve_datalist_map(Map<String, String> board);

	public void insert_board(Board board);

	public void update_board(Board board);

	public void delete_board(Board board);

	public void insert_board_map(Map<String, Object> board);

	public void update_board_map(Map<String, Object> board);

	public void delete_board_map(Map<String, Object> board);
	
	public int selectUserCount();

}
