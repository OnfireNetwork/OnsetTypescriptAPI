/** @noSelfInFile */

class ClientDrawManager {
    /*
    Missing Functions because of unclear docs:
    DrawTexture
    */
    public setColor(color: Color): void {
        SetDrawColor(color.toHex());
    }
    public setScale(scale: Vector2d): void {
        SetDrawScale(scale.x, scale.y);
    }
    public getTextSize(text: string, scale?: number): number {
        return GetTextSize(text, scale);
    }
    public text(position: Vector2d, text: string): void {
        DrawText(position.x, position.y, text);
    }
    public line(start: Vector2d, end: Vector2d, thickness?: number, color?: Color): void {
        if(thickness !== undefined){
            if(color !== undefined){
                DrawLine(start.x, start.y, end.x, end.y, thickness, color.red, color.green, color.blue);
            }else{
                DrawLine(start.x, start.y, end.x, end.y, thickness);
            }
        }else{
            DrawLine(start.x, start.y, end.x, end.y);
        }
    }
    public box(position: Vector2d, size: Vector2d, thickness?: number, color?: Color): void {
        if(thickness !== undefined){
            if(color !== undefined){
                DrawBox(position.x, position.y, size.x, size.y, thickness, color.red, color.green, color.blue);
            }else{
                DrawBox(position.x, position.y, size.x, size.y, thickness);
            }
        }else{
            DrawBox(position.x, position.y, size.x, size.y);
        }
    }
    public rect(position: Vector2d, size: Vector2d, color?: Color): void {
        if(color !== undefined){
            DrawBox(position.x, position.y, size.x, size.y, color.red, color.green, color.blue);
        }else{
            DrawBox(position.x, position.y, size.x, size.y);
        }
    }
    public line3d(start: Vector3d, end: Vector3d, color?: Color): void {
        if(color !== undefined){
            DrawLine3D(start.x, start.y, start.z, end.x, end.y, end.z, color.red, color.green, color.blue);
        }else{
            DrawLine3D(start.x, start.y, start.z, end.x, end.y, end.z);
        }
    }
    public point3d(location: Vector3d, size?: number, color?: Color): void {
        if(size !== undefined){
            if(color !== undefined){
                DrawPoint3D(location.x, location.y, location.z, size, color.red, color.green, color.blue);
            }else{
                DrawPoint3D(location.x, location.y, location.z, size);
            }
        }else{
            DrawPoint3D(location.x, location.y, location.z);
        }
    }
    public solidBox3d(start: Vector3d, end: Vector3d, color: Color): void {
        DrawSolidBox3D(start.x, start.y, start.z, end.x, end.y, end.z, color.toHex());
    }
    public sphere3d(location: Vector3d, radius?: number, color?: Color): void {
        if(radius !== undefined){
            if(color !== undefined){
                DrawCircle3D(location.x, location.y, location.z, radius, color.red, color.green, color.blue);
            }else{
                DrawCircle3D(location.x, location.y, location.z, radius);
            }
        }else{
            DrawCircle3D(location.x, location.y, location.z);
        }
    }
}