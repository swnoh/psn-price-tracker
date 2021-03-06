"""empty message

Revision ID: 515bb7f60b8e
Revises: 225033f05a13
Create Date: 2018-08-11 01:37:42.704688

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '515bb7f60b8e'
down_revision = '225033f05a13'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('psn_banner',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('banner_url', sa.JSON(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('psn_banner')
    # ### end Alembic commands ###
