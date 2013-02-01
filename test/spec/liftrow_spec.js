/**
 * LiftRow Model Spec
 *
 * Justin Christensen
 * Sat Dec 29 16:06:25 2012
 */
(function (window, $, undefined) {
  'use strict';

  // LiftRow Model
  describe('LiftRow', function () {
    var LiftRow = _531.Models.LiftRow, 
      testAttrs = { 
        lift: 'Squat', 
        max: 315, 
        order: 0 
      },
      row;

    // If we decide we need an empty row
    before(function () {
      row = new LiftRow();  
    });

    it('has default attributes', function () {
      expect(row.get('lift')).to.equal('');
      expect(row.get('max')).to.equal(0);
      expect(row.get('order')).to.equal(0);
    });

    it('should set attributes', function () {
      row = new LiftRow(testAttrs);
      expect(row.get('lift')).to.equal('Squat');
      expect(row.get('max')).to.equal(315);
      expect(row.get('order')).to.equal(0);
    }); 

    it('calculates weight given a percentage', function () {
      row.set('max', 0);
      expect(row.calcWeight(.65)).to.equal(0);
      expect(row.calcWeight(0)).to.equal(0);
      row.set('max', 200);
      expect(row.calcWeight(.65)).to.equal(130);
      expect(row.calcWeight(0)).to.equal(0);
    });

  });


}(window, jQuery));

