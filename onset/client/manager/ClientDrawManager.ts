class ClientDrawManager {
    /*
    Missing Functions because of unclear docs:
    DrawLine3D
    DrawPoint3D
    DrawSolidBox3D
    DrawCircle3D
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
}