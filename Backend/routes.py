from flask import Blueprint, request, jsonify
from models import db, StockItem

api_bp = Blueprint('api', __name__)

@api_bp.route('/stock-item', methods=['POST'])
def add_stock_item():
    data = request.json
    stock_item = StockItem(
        batch_code=data['batch_code'],
        stock_code=data['stock_code'],
        part_no=data['part_no'],
        supplier=data['supplier'],
        po_number=data['po_number'],
        manufacturer=data['manufacturer'],
        model_name=data['model_name'],
        cost_price=data['cost_price'],
        sales_price=data['sales_price'],
        qty_available=data['qty_available'],
        allocated=data['allocated'],
        faulty=data['faulty'],
        reorder_level=data['reorder_level'],
        barcode=data['barcode'],
        serial_no=data['serial_no'],
        location=data['location'],
        grade=data['grade'],
        condition=data['condition'],
        cosmetic_damage=data['cosmetic_damage'],
        allocated_status=data['allocated_status'],
        unit_price=data['unit_price'],
        sales_price=data['sales_price'],
    )
    db.session.add(stock_item)
    db.session.commit()
    return jsonify({"message": "Stock item added successfully"}), 201

@api_bp.route('/stock-items', methods=['GET'])
def get_stock_items():
    stock_items = StockItem.query.all()
    result = []
    for item in stock_items:
        result.append({
            "id": item.id,
            "batch_code": item.batch_code,
            "stock_code": item.stock_code,
            "part_no": item.part_no,
            "supplier": item.supplier,
            "po_number": item.po_number,
            "manufacturer": item.manufacturer,
            "model_name": item.model_name,
            "cost_price": item.cost_price,
            "sales_price": item.sales_price,
            "qty_available": item.qty_available,
            "allocated": item.allocated,
            "faulty": item.faulty,
            "reorder_level": item.reorder_level,
            "barcode": item.barcode,
            "serial_no": item.serial_no,
            "location": item.location,
            "grade": item.grade,
            "condition": item.condition,
            "cosmetic_damage": item.cosmetic_damage,
            "allocated_status": item.allocated_status,
            "unit_price": item.unit_price,
            "sales_price": item.sales_price,
        })
    return jsonify(result)
