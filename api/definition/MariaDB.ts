/** @noSelfInFile */

declare function mariadb_connect(host: string, user: string, password: string, database: string): number;
declare function mariadb_connect_file(fileName: string): number;
declare function mariadb_set_charset(handleId: number, charset: string): void;
declare function mariadb_get_charset(handleId: number): string;
declare function mariadb_escape_string(handleId: number, source: string): string;
declare function mariadb_prepare(handleId: number, query: string, ...values: any[]): void;
declare function mariadb_query(handleId: number, statement: number, callbackFunction: Function, ...callbackArgs: any[]): number;
declare function mariadb_async_query(handleId: number, statement: number, callbackFunction: Function, ...callbackArgs: any[]): number;
declare function mariadb_await_query(handleId: number, query: string, useCache?: boolean): void;
declare function mariadb_query_file(handleId: number, file: string, callbackFunction: Function, callbackArgs: any[]): void;
declare function mariadb_await_query_file(handleId: number, file: string, useCache: boolean): void;
declare function mariadb_close(handleId: number): void;
declare function mariadb_get_insert_id(handleId: number): number;
declare function mariadb_get_value_index(rowId: number, columnId: number): string;
declare function mariadb_get_value_index_int(rowId: number, columnId: number): number;
declare function mariadb_get_value_index_float(rowId: number, columnId: number): number;
declare function mariadb_get_value_name(rowId: number, columnName: string): string;
declare function mariadb_get_value_name_int(rowId: number, columnName: string): number;
declare function mariadb_get_value_name_float(rowId: number, columnName: string): number;
declare function mariadb_delete_result(resultId: number): void;
declare function mariadb_set_result(resultId: number): void;
declare function mariadb_get_field_name(columnId: number): string;
declare function mariadb_save_result(): void;
declare function mariadb_set_active_result(resultId: number): void;
declare function mariadb_get_row_count(): number;
declare function mariadb_errno(handleId: number): number;
declare function mariadb_error(handleId: number): string;
declare function mariadb_unset_active_result(): void;
declare function mariadb_get_result_count(): number;
declare function mariadb_get_field_count(): number;
declare function mariadb_save_result(): void;
declare function mariadb_is_any_result_active(): boolean;
declare function mariadb_is_valid_result(resultId: number): boolean;
declare function mariadb_get_affected_rows(): number; // Unclear
declare function mariadb_get_warning_count(): number;
declare function mariadb_get_query_exec_time(): number;
declare function mariadb_get_row(rowId: number): void; // Unclear
declare function mariadb_get_assoc(rowId: number): void; // Unclear
declare function mariadb_stat(handleId: number): void; // Unclear
declare function mariadb_set_result(resultId: number): void;
declare function mariadb_unprocessed_queries(handleId: number): void; // Unclear