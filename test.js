const chai=require('chai')
, assert=chai.assert
, should=chai.should()
, expect=chai.expect
describe('string', ()=>
{
    before(()=>
    {
        console.log("before hook");
    })
    after(()=>
    {
        console.log("After hook");
    })
    beforeEach(()=>
    {
        console.log("beforeEach hook");
    })
    afterEach(()=>
    {
        console.log("afterEach hook");
    })

    let name="Hema"
    it('shoud be of type string', ()=>
    {
name.should.be.a('string')
expect(name).to.be.a('string')
assert.typeOf(name,"string")
    })
    it('should contain Hema', ()=>
    {
        name.should.not.equal('Hima')
        name.should.equal('Hema')
        expect(name).to.equal('Hema')
        assert.equal(name,'Hema')
    })
})

